import React from 'react';

import './Movie.css';

const Movie = (props: any) => {
  let email = '';
  {
    props.user ? (email = props.user.user.email) : (email = '');
  }
  console.log(props.addmovietolist);

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
        {console.log(imdbId, email)}
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
            + movie list
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Movie;
