import React from 'react';

import './Movie.css';

const movieInformation = (props: any) => {
  return (
    <div className='movieInformation'>
      <div className='poster'>
        <img alt='poster' src={props.poster} />
      </div>
      <div className='title'>
        <h5 style={{ fontSize: '20px' }}>Title: {props.title}</h5>
      </div>
      <div className='plot'>
        <p>Actors: {props.plot}</p>
      </div>
      <div className='actor'>
        <p>Actors: {props.actors.join(', ')}</p>
      </div>
      <div className='information'>
        <p> Genres: {props.genres.join(', ')}</p>
        <p> Raiting:{props.raiting}</p>
        <p> Runtime: {props.runtime}</p>
        <p> Year: {props.year}</p>
      </div>
    </div>
  );
};

export default movieInformation;
