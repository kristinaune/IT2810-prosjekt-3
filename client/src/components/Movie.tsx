import React from 'react';
import { MovieType } from '../types';

import './Movie.css';

const Movie = ({movie, mymovielist, isAuthenticated}: {movie: MovieType, isAuthenticated: boolean, mymovielist?: Array<MovieType extends Object>}) => {
  return (
    <div className='movie'>
      <div className='poster'>
        <img alt='poster' src={movie.poster} />
      </div>
      <div className='title'>
        <h5>
          {movie.title} ({movie.year})
        </h5>
        {}
        <button className='button' type='submit'>
          {' '}
          + movie list
        </button>
      </div>
    </div>
  );
};

export default Movie;
