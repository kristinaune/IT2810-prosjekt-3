import React, { createRef, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { startSearchMovies } from '../../../store/actions/movies';
import { startAddMovie } from '../../../store/actions/user';
import { MovieType, Sort, StoreState, UserType } from '../../../types';
import searchSuggestions from './utils/searchSuggestions';
import SortRow from './SortRow';
import './Search.css';
import ResultList from './ResultList';

const SearchMovie = ({
  movies,
  startSearchMovies,
}: {
  movies?: Array<MovieType>;
  user?: UserType;
  startSearchMovies: (
    search: string,
    attribute: Sort.YEAR | Sort.RATING | Sort.RUNTIME,
    direction: Sort.ASC | Sort.DESC
  ) => void;
}) => {
  // A reference to the search/input-field.
  const searchFieldRef = createRef<HTMLInputElement>();

  // Sort and search-states
  const [activeSort, setActiveSort] = useState<
    Sort.YEAR | Sort.RATING | Sort.RUNTIME
  >(Sort.RATING);
  const [sortDirection, setSortDirection] = useState<Sort.DESC | Sort.ASC>(-1);
  const [searchWord, setSearchWord] = useState<string>('');

  /**
   * Calls the search_movie action with parameters for searching and sorting.
   * @param searchString Searchword in filtering
   * @param sortAttr Attribute we want to sort on (Year, Rating, Runtime)
   * @param sortDir Sort direction, -1 for descending and 1 for ascending
   */
  const dispatchSearchAndSort = (
    searchString: string,
    sortAttr: Sort.YEAR | Sort.RATING | Sort.RUNTIME,
    sortDir: Sort.ASC | Sort.DESC
  ) => {
    startSearchMovies(searchString, sortAttr, sortDir);
  };

  /**
   * Updates sorting criterias and dispatches new search and sort
   * @param attribute Attribute we want to sort on
   */
  const handleSort = (attribute: Sort.YEAR | Sort.RATING | Sort.RUNTIME) => {
    // Assign new direction to a constant.
    // This is because useState updates the state too slow for us
    // to reference the state in dispatchSearch.
    const newDir = activeSort === attribute ? sortDirection * -1 : -1;
    setSortDirection(newDir);
    setActiveSort(attribute);
    dispatchSearchAndSort(searchWord, attribute, newDir);
  };

  useEffect(() => {
    // Change suggestion in searchfield every two seconds.
    setInterval(() => {
      /**
       * Fills in a random suggestion in the placeholder
       * The 'eslint-disable'-comment is used to avoid false positive when using optional-chaining operator,
       * a known issue with typescript-eslint.
       */
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      searchFieldRef.current?.setAttribute(
        'placeholder',
        'i.e. ' +
          searchSuggestions[
            Math.floor(Math.random() * searchSuggestions.length)
          ]
      );
    }, 2000);
  }, [searchFieldRef]);

  /*   const startAddMovietolist = (email: string, imdbId: string) => {
    startAddMovie!(email, imdbId);
  }; */

  return (
    <main id='searchMovie'>
      <section id='searchContainer'>
        <h2> Search for a movie, genre or actor: </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatchSearchAndSort(searchWord, activeSort, sortDirection);
          }}
        >
          <input
            ref={searchFieldRef}
            id='searchField'
            placeholder='i.e. Spiderman'
            type='search'
            autoComplete='off'
            autoFocus={true}
            onChange={(e) => {
              setSearchWord(e.target.value);
            }}
          ></input>
          <br />
          <button id='searchButton' type='submit'>
            SEARCH
          </button>
        </form>
        <SortRow
          activeSort={activeSort}
          sortDirection={sortDirection}
          handleSort={handleSort}
        />
      </section>
      {movies && <ResultList movies={movies} />}
    </main>
  );
};

const mapStateToProps = (state: StoreState) => {
  return { movies: state.movies.movies, user: state.user };
};

const mapDispatchToProps = { startSearchMovies, startAddMovie };

export default connect(mapStateToProps, mapDispatchToProps)(SearchMovie);
