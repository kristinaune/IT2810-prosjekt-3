import React, { ChangeEvent, createRef, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { search_and_sort } from '../../../store/actions/results';
import { MovieType } from '../../../types';
import searchSuggestions from './utils/searchSuggestions';
import Movie from '../../Movie';
import SortRow from './SortRow';
import './SearchMovie.css';

const SearchMovie = ({
  movies,
  results,
  search_and_sort,
}: {
  movies?: Array<MovieType>;
  results: Array<MovieType>;
  search_and_sort: Function;
}) => {
  // Number of movies to be displayed. Used in pagination.
  let [movieCount, setMovieCount] = useState(20);

  // A reference to the search/input-field.
  let searchFieldRef = createRef<HTMLInputElement>();

  // Sort and search-states
  const [activeSort, setActiveSort] = useState<string>('rating');
  const [sortDirection, setSortDirection] = useState<number>(-1);
  const [searchWord, setSearchWord] = useState<string>('');

  /**
   * Updates sorting criterias and dispatches new search and sort
   * @param attribute Attribute we want to sort on
   * @param direction Direction we want to sort in, -1 for descending and 1 for ascending
   */
  const handleSort = (attribute: string) => {
    // Assign new direction to a constant.
    // This is because useState updates the state too slow for us
    // to reference the state in dispatchSearch.
    const newDir = activeSort === attribute ? sortDirection * -1 : -1;
    setSortDirection(newDir);
    setActiveSort(attribute);
    dispatchSearchAndSort(searchWord, attribute, newDir);
  };

  /**
   * Handles any change in the search field and dispatches a new search.
   * @param e ChangeEvent
   */
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
    // Determines how many movies that should be displayed.
    // 20 if user is searching, 0 if search field is empty.
    const localMovieCount = e.target.value.length > 0 ? 20 : 0;
    setMovieCount(localMovieCount);
    // Only dispatch searchMovieTitle if there has been a search.
    dispatchSearchAndSort(e.target.value, activeSort, sortDirection);
  };

  /**
   * Calls the search_movie action with parameters for searching and sorting.
   * @param searchString Searchword in filtering
   * @param sortAttr Attribute we want to sort on (Year, Rating, Runtime)
   * @param sortDir Sort direction, -1 for descending and 1 for ascending
   */
  const dispatchSearchAndSort = (
    searchString: string,
    sortAttr: string,
    sortDir: number
  ) => {
    search_and_sort(searchString, movies, sortAttr, sortDir);
  };

  useEffect(() => {
    // Change suggestion in searchfield every two seconds.
    setInterval(() => {
      // Fills in a random suggestion in the placeholder
      searchFieldRef.current?.setAttribute(
        'placeholder',
        'i.e. ' +
          searchSuggestions[
            Math.floor(Math.random() * searchSuggestions.length)
          ]
      );
    }, 2000);
  }, [searchFieldRef]);

  /**
   * When user nears bottom of page, increase setMovieCount by 10
   * so more movies can be displayed. A way of implementing smooth pagination.
   * @param e Scroll event
   */
  window.onscroll = (e: Event) => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.scrollHeight - 200
    ) {
      setMovieCount((m) => m + 10);
    }
  };

  return (
    <div className='movieList'>
      <h2> Search for a movie, genre or actor: </h2>

      <div id='searchContainer'>
        <input
          ref={searchFieldRef}
          id='searchField'
          placeholder='i.e. Spiderman'
          type='search'
          autoComplete='off'
          autoFocus={true}
          onChange={(e) => {
            handleSearch(e);
          }}
        ></input>
        <SortRow
          activeSort={activeSort}
          sortDirection={sortDirection}
          handleSort={handleSort}
        />
      </div>
      {results
        .slice(0, Math.min(movieCount, results.length))
        .map((movie: any) => {
          return <Movie key={movie.imdbId} {...movie} />;
        })}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return { movies: state.movies, results: state.results };
};

const mapDispatchToProps = { search_and_sort };

export default connect(mapStateToProps, mapDispatchToProps)(SearchMovie);
