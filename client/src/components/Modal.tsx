import React, { useState, forwardRef } from 'react';
import { MovieType } from '../types';

function Modal({
  movie,
  display,
  closeModal,
}: {
  movie: MovieType;
  display: boolean;
  closeModal: Function;
}) {
  const {
    title,
    poster,
    plot,
    rating,
    runtime,
    director,
    genres,
    actors,
    year,
  } = movie;
  console.log(display);

  return (
    <React.Fragment>
      <div
        className={display ? 'overlay' : 'hide'}
        onClick={() => closeModal()}
      />
      <div className={display ? 'modal' : 'hide'}>
        <button onClick={() => closeModal()}>X</button>
        <div className='content'>
          <h3>{title}</h3>
          <div className='modalPosters'>
            <img alt='modalposter' src={poster} />
          </div>
          <div className='modalInformation'>
            <h4>Plot: {plot}</h4>
            <h4> Raiting: {rating}</h4>
            <h4> Runtime: {runtime} min</h4>
            <h4> Director: {director}</h4>
            <h4> Genres: {genres}</h4>
            <h4> Actors: {actors}</h4>
            <h4> Year: {year}</h4>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Modal;
