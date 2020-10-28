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
 */
const AllMovies = ({
  movies,
  startGetMovies,
}: {
  movies: Array<MovieType>;
  startGetMovies: VoidFunction;
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
    <div className='movies'>
      <FilterMovies />
      {listMovies && <MovieList movies={listMovies} />}
    </div>
  );
};

const mapStateToProps = (state: StoreState) => {
  return { movies: state.movies.movies };
};

const mapDispatchToProps = {
  startGetMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(AllMovies);
