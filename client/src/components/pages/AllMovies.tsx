import React, { useEffect, useState } from 'react';
import { startGetMovies } from '../../store/actions/movies';
import { connect } from 'react-redux';
import { MovieType, StoreState } from '../../types';
import MovieCard from '../MovieItem';
import FilterMovies from './FilterMovies';
import paginator from '../../utilities/paginator';
import './AllMovies.css';
import MovieListItem from './Search/MovieListItem';

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

  // Fetches movies with startGetMovies() on component mount
  useEffect(() => {
    startGetMovies();
  }, [startGetMovies]);

  // Pagination listener/function.
  paginator(setMovieCount, 10);

  return (
    <div className='movies'>
      <FilterMovies />
      {movies &&
        movies[0] &&
        movies
          .slice(0, Math.min(movieCount, movies.length))
          .map((movie: MovieType) => {
            return <MovieCard key={movie.imdbId} movie={movie} />;
          })}
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
