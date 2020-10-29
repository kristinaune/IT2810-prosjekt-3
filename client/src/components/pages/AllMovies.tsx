import React, { useEffect, useState } from 'react';
import { startGetMovies } from '../../store/actions/movies';
import { connect } from 'react-redux';
import { MovieType, StoreState } from '../../types';
import MovieItem from '../MovieItem';
import FilterMovies from './FilterMovies';
import paginator from '../../utilities/paginator';
import './AllMovies.css';
import MovieList from './MovieList';

/**
 * Displays all movies in database, by some filters
 * @param movies Array of movies to be displayed, from Redux
 * @param startGetMovies Action dispatcher getting movies from database
 * @param moviesFiltered Indicates if a filter to the movie list has been applied.
 */
const AllMovies = ({
  movies,
  startGetMovies,
  moviesFiltered,
}: {
  movies: Array<MovieType>;
  startGetMovies: VoidFunction;
  moviesFiltered: boolean;
}) => {
  // Used to limit number of movies loaded at a time by pagination
  const [movieCount, setMovieCount] = useState(20);

  // Pagination listener/function.
  paginator(setMovieCount, 20);

  // Fetches movies with startGetMovies() on component mount
  useEffect(() => {
    startGetMovies();
  }, [startGetMovies]);

  const listMovies = movies.slice(0, Math.min(movieCount, movies.length));
  return (
    <main className='movies'>
      <FilterMovies />
      {listMovies.length > 0 ? (
        <MovieList movies={listMovies} />
      ) : (
        moviesFiltered && <h3> No movies matching filters.</h3>
      )}
    </main>
  );
};

const mapStateToProps = (state: StoreState) => {
  return {
    movies: state.movies.movies,
    moviesFiltered: state.movies.type === 'FILTER_MOVIES',
  };
};

const mapDispatchToProps = {
  startGetMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(AllMovies);
