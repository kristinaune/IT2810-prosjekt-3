import React from 'react';
import { MovieType } from '../types';

const MovieModal = ({
  movie,
  closeModal,
}: {
  movie: MovieType;
  closeModal: Function;
}) => {
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

  return (
    <React.Fragment>
      <div className='overlay' onClick={() => closeModal()} />
      <div className='modal'>
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
};

export default MovieModal;
