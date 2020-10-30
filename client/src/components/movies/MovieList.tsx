import React, { ReactElement } from 'react';
import { IMovie } from '../../types';
import MovieItem from './MovieItem';

/**
 * Renders a list of movies.
 * @param movies A list of movies to be displayed
 */
const MovieList = ({ movies }: { movies: IMovie[] }): ReactElement => {
  return (
    <section className='movieList'>
      {movies.map((movie: IMovie) => {
        return <MovieItem key={movie.imdbId} movie={movie} />;
      })}
    </section>
  );
};

export default MovieList;
