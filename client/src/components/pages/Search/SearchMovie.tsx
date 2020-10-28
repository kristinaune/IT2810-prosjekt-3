import React, { createRef, useEffect, useState } from 'react';
import { connect } from 'react-redux';
<<<<<<< HEAD
import { startSearchMovies } from '../../../store/actions/movies';
import { startAddMovie } from '../../../store/actions/user';
import { MovieType, Sort, StoreState, UserType } from '../../../types';
=======
import { search_movies } from '../../../store/actions/movies';
import { MovieType, Sort } from '../../../types';
>>>>>>> 33-split-action-creators-from-action-dispatchers
import searchSuggestions from './utils/searchSuggestions';
import SortRow from './SortRow';
import './SearchMovie.css';
import ResultList from './ResultList';

const SearchMovie = ({
  movies,
<<<<<<< HEAD
  startSearchMovies,
}: {
  movies?: Array<MovieType>;
  user?: UserType;
  startSearchMovies: (
    search: string,
    attribute: Sort.YEAR | Sort.RATING | Sort.RUNTIME,
    direction: Sort.ASC | Sort.DESC
  ) => void;
=======
  search_movies,
}: {
  movies?: Array<MovieType>;
  search_movies: Function;
>>>>>>> 33-split-action-creators-from-action-dispatchers
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
    <div id='searchMovie'>
      <div id='searchContainer'>
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
      </div>
      {movies && <ResultList movies={movies} />}
    </div>
  );
};

const mapStateToProps = (state: StoreState) => {
  return { movies: state.movies.movies, user: state.user };
};

const mapDispatchToProps = { startSearchMovies, startAddMovie };

export default connect(mapStateToProps, mapDispatchToProps)(SearchMovie);
