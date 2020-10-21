import React, { useState } from 'react';

import './Movie.css';
import MovieInformation from './MovieInformation';

const Movie = (props: any) => {
  let email = '';
  {
    props.user ? (email = props.user.user.email) : (email = '');
  }
  const imdbId = props.imdbId;

  return (
    <div className='movie'>
      <div className='poster'>
        <img alt='poster' src={props.poster} />
      </div>
      <div className='title'>
        <h5>
          {props.title} ({props.year})
        </h5>
        
        {props.user ? (props.user.user.movieList.includes(imdbId) ? (
              <button
                  className='button'
                  type='submit'
                  onClick={(e) => {
                    console.log('Clicking remove');
                    e.preventDefault();
                    props.removemovie(imdbId, email);
                  }}
                >
                  - movie list
                </button>
       
            )  : (
              <button
                className='button'
                type='submit'
                onClick={(e) => {
                  console.log('Clicking');
                  e.preventDefault();
                  props.addmovie(imdbId, email);
                }}
              >
                {' '}
                + movie list
              </button>
            ) ) : null}
      </div>
      <button className='button'> More information</button>
    </div>
  );
};

export default Movie;
