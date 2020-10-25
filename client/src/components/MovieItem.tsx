import React, { useState } from 'react';
import { MovieType } from '../types';
import { connect } from 'react-redux';
import { set_display_movie } from '../store/actions/displayMovie';
import './MovieItem.css';
import '../App.css';

const MovieItem = (movie: MovieType) => {
  const { poster, year, title } = movie;
  return (
    <div className='movieItem'>
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
