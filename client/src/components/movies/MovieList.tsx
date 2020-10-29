import React from 'react';
import { MovieType } from '../../types';
import MovieItem from './MovieItem';

const MovieList = ({ movies }: { movies: MovieType[] }) => {
  return (
    <section className='movieList'>
      {movies.map((movie: MovieType) => {
        return <MovieItem key={movie.imdbId} movie={movie} />;
      })}
    </section>
  );
};

export default MovieList;
