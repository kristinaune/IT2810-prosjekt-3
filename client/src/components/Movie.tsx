import React from 'react';

import './Movie.css';

const Movie = (props: any) => {
  return (
    <div className='movie'>
      <div className='poster'>
        <img alt='poster' src={props.poster} />
      </div>
      <div className='title'>
        <h5 style={{ fontSize: '20px' }}>
          Title: {props.title} ({props.year})
        </h5>
        {/* <p>Actors: {props.actors.join(', ')}</p> */}
      </div>
      <button> More information</button>
    </div>
  );
};

export default Movie;
