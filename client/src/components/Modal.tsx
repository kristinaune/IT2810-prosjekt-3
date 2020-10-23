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
        <div className='content'>
          <h3>{props.title}</h3>
          <div className='modalPosters'>
            <img alt='modalposter' src={props.poster} />
          </div>
          <div className='modalInformation'>
            <h4>Plot: {props.plot}</h4>
            <h4> Raiting: {props.rating}</h4>
            <h4> Runtime: {props.runtime} min</h4>
            <h4> Director: {props.director}</h4>
            <h4> Genres: {props.genres}</h4>
            <h4> Actors: {props.actors}</h4>
            <h4> Year: {props.year}</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
