import React from 'react';
import { MovieType } from '../../types';
import MovieItem from '../MovieItem';

const MovieList = ({ movies }: { movies: MovieType[] }) => {
  return (
    <div className='movieList'>
      {movies.map((movie: MovieType) => {
        return <MovieItem key={movie.imdbId} movie={movie} />;
      })}
    </div>
  );
};

export default MovieList;
