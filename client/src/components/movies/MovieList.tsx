import React, { ReactElement } from 'react';
import { MovieType } from '../../types';
import MovieItem from './MovieItem';

/**
 * Renders a list of movies.
 * @param movies A list of movies to be displayed
 */
const MovieList = ({ movies }: { movies: MovieType[] }): ReactElement => {
  return (
    <section className='movieList'>
      {movies.map((movie: MovieType) => {
        return <MovieItem key={movie.imdbId} movie={movie} />;
      })}
    </section>
  );
};

export default MovieList;
