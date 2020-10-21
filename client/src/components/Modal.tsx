import React, { useState, forwardRef } from 'react';
import ReactDOM from 'react-dom';
import movieInformation from './MovieInformation';

function Modal(props: any) {
  const { show, closeModal } = props;

  return (
    <>
      <div className={show ? 'overlay' : 'hide'} onClick={closeModal} />
      <div className={show ? 'modal' : 'hide'}>
        <button onClick={closeModal}>X</button>
        <h1>{props.title}</h1>
        <p>
          <div className='movieInformation'>
            <div className='poster'>
              <img alt='poster' src={props.poster} />
            </div>

            <div className='plot'>
              <p>Plot: {props.plot}</p>
            </div>
            <div className='actor'>
              {/* <p>Actors: {props.actors.join(', ')}</p> */}
            </div>
            <div className='information'>
              {/* <p> Genres: {props.genres.join(', ')}</p> */}
              <p> Raiting:{props.raiting}</p>
              <p> Runtime: {props.runtime}</p>
              <p> Year: {props.year}</p>
            </div>
          </div>
        </p>
      </div>
    </>
  );
}

export default Modal;
