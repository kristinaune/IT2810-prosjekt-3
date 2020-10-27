import React from 'react';
import { MovieType, User } from '../types';

const MovieModal = ({
  movie,
  closeModal,
  addMovie,
  removeMovie,
  user,
}: {
  movie: MovieType;
  closeModal: Function;
  addMovie: Function;
  removeMovie: Function;
  user?: User; 
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
        <button className='closeButton' onClick={() => closeModal()}>
          X
        </button>
        <div className='content'>
          <h3>{title}</h3>
          <div className='modalPosters'>
            <img alt='modalposter' src={poster} />
          </div>
          <div className='modalInformation'>
            <h4>Plot: {plot}</h4>
            <h4> Rating: {rating}</h4>
            <h4> Runtime: {runtime} min</h4>
            <h4> Director: {director}</h4>
            <h4> Genres: {genres}</h4>
            <h4> Actors: {actors}</h4>
            <h4> Year: {year} </h4>
            {user && user.authState[0] ? (
              user.movieList?.includes(movie.imdbId) ? (
                <button
                  className='movieListButton'
                  onClick={(e) => {
                    e.preventDefault();
                    removeMovie(movie.imdbId, user.email);
                  }}
                >
                  {' '}
                  Remove from movielist
                </button>
              ) : (
                <button
                  className='movieListButton'
                  onClick={(e) => {
                    e.preventDefault();
                    addMovie(movie.imdbId, user.email);
                  }}
                >
                  {' '}
                  Add to movielist
                </button>
              )
            ) : null}
            {}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MovieModal;
