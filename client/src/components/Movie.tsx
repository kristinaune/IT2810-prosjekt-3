import React from 'react';

import './Movie.css';
import MovieInformation from './MovieInformation';

const Movie = (props: any) => {
  let email = '';
  {
    props.user ? (email = props.user.user.email) : (email = '');
  }
  const imdbId = props.imdbId;
  // const handleClick = () => {
  //   addmovie(email, imdbId);
  // };
  return (
    <div className='movie'>
      <div className='poster'>
        <img alt='poster' src={props.poster} />
      </div>
      <div className='title'>
        <h5>
          {props.title} ({props.year})
        </h5>
        {props.user ? (
          <button
            className='button'
            type='submit'
            onClick={(e) => {
              console.log('Clicking');
              e.preventDefault();
              props.addmovietolist(imdbId, email);
            }}
          >
            {' '}
            {}+ movie list
          </button>
        ) : null}
      </div>
      <button className='button'> More information</button>
    </div>
  );
};

export default Movie;
