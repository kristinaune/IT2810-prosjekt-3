import React, { useEffect, useState } from 'react';
import { get_movies } from '../../store/actions/movies';
import { connect } from 'react-redux';
import { MovieType } from '../../types';
import MovieCard from '../MovieItem';
import paginator from '../../utilities/paginator';
import './AllMovies.css';

/**
 * Displays all movies in database, by some filters
 * @param movies Array of movies to be displayed, from Redux
 * @param get_movies Action dispatcher getting movies from database
 */
const AllMovies = ({
  movies,
  get_movies,
}: {
  movies?: Array<MovieType>;
  get_movies: Function;
}) => {
  // Used to limit number of movies loaded at a time by pagination
  const [movieCount, setMovieCount] = useState(20);

  // Fetches movies with get_movies() on component mount
  useEffect(() => {
    get_movies();
  }, [get_movies]);

  // Pagination listener/function.
  paginator(setMovieCount, 10);

  return (
    <div className='movies'>
      <div className='filter'>
        <button className='genreButton'> Comedy</button>
        <button className='genreButton'> War</button>
        <button className='genreButton'> Action</button>
        <button className='genreButton'> SciFi</button>
        <button className='genreButton'> Drama</button>
        <button className='genreButton'> Crime</button>
      </div>
      {/* <div className='container'>
        <header>
          Filter your search
          <button type='button' className='button'>
            {' '}
            Sjanger
          </button>
          <div className='dropdown'>
            <ul>
              <li>Comedy</li>
              <li>Action</li>
              <li>Scifi</li>
              <li>Romantic</li>
            </ul>
          </div>
        </header>
      </div> */}

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

const mapStateToProps = (state: any) => {
  return { movies: state.movies };
};

const mapDispatchToProps = {
  get_movies,
};

export default connect(mapStateToProps, mapDispatchToProps)(AllMovies);
