import React, { useState } from 'react';
import { MovieType } from '../types';
import { connect } from 'react-redux';
import { set_display_movie } from '../store/actions/displayMovie';
import './MovieItem.css';
import '../App.css';

const MovieItem = ({
  movie,
  set_display_movie,
}: {
  movie: MovieType;
  set_display_movie: Function;
}) => {
  const { poster, year, title } = movie;
  console.log(movie);

  return (
    <div className='movieItem' onClick={() => set_display_movie(movie)}>
      <div className='poster'>
        <img alt='poster' src={poster} />
      </div>
      <div className='title'>
        <h5>
          {title} ({year})
        </h5>
      </div>
    </div>
  );
};

export default connect(null, { set_display_movie })(MovieItem);
