import React, { ChangeEvent, createRef, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { search_movie_title } from '../../../store/actions/results';
import { MovieType } from '../../../types';
import Movie from '../../Movie';
import SortRow from './SortRow';
import './SearchMovie.css';

const SearchMovie = ({
  movies,
  results,
  searchMovieTitle,
}: {
  movies?: Array<MovieType>;
  results: Array<MovieType>;
  searchMovieTitle: Function;
}) => {
  // Number of movies to be displayed. Used in pagination.
  let [movieCount, setMovieCount] = useState(20);

  let [sort, setSort] = useState(['', 0]);
  // A reference to the search/input-field.
  let searchFieldRef = createRef<HTMLInputElement>();

  /**
   * Handles any change in the search field.
   * @param e ChangeEvent
   */
  const searchFieldHandler = (e: ChangeEvent<HTMLInputElement>) => {
    // Determines how many movies that should be displayed.
    // 20 if user is searching, 0 if search field is empty.
    const localMovieCount = e.target.value.length > 0 ? 20 : 0;
    setMovieCount(localMovieCount);
    // Only dispatch searchMovieTitle if there has been a search.
    localMovieCount && searchMovieTitle(e.target.value, movies);
  };

  useEffect(() => {
    // Change suggestion in searchfield every two seconds.
    setInterval(() => {
      // An array with search-suggestions
      const suggestions = [
        'Spiderman',
        'Batman',
        'Tarantino',
        'DiCaprio',
        'Spielberg',
        'Scorsese',
        'Godfather',
        'Avengers',
        'Christopgher Nolan',
        'Inception',
        'Fight Club',
        'Forrest Gump',
        'Tom Hanks',
        'Interstellar',
        'Gladiator',
      ];
      // Fills in a random suggestion in the placeholder
      searchFieldRef.current?.setAttribute(
        'placeholder',
        'i.e. ' + suggestions[Math.floor(Math.random() * suggestions.length)]
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
      <div id='searchContainer'>
        <input
          ref={searchFieldRef}
          id='searchField'
          placeholder='i.e. Spiderman'
          type='text'
          onChange={(e) => {
            searchFieldHandler(e);
          }}
        ></input>
        <SortRow />
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

const mapDispatchToProps = { searchMovieTitle: search_movie_title };

export default connect(mapStateToProps, mapDispatchToProps)(SearchMovie);
