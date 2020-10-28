import React from 'react';
import { MovieType, User } from '../types';

const MovieModal = ({
  movie,
  startCloseModal,
  addMovie,
  removeMovie,
  user,
}: {
  movie: MovieType;
  startCloseModal: () => void;
  addMovie: (movie: MovieType) => void;
  removeMovie: (movie: MovieType) => void;
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
      <div className='overlay' onClick={() => startCloseModal()} />
      <div className='modal'>
        <button className='closeButton' onClick={() => startCloseModal()}>
          X
        </button>
        <div className='content'>
          <h3>{title}</h3>
          <div className='modalPosters'>
            <img alt='modalposter' src={poster} />
          </div>
          <div className='modalInformation'>
            <p className='modaltext'>
              {' '}
              <b> Plot: </b>
              {plot}
            </p>
            <p className='modaltext'>
              {' '}
              <b>Raiting: </b> {rating}
            </p>
            <p className='modaltext'>
              {' '}
              <b>Runtime: </b> {runtime} min
            </p>
            <p className='modaltext'>
              {' '}
              <b> Director: </b>
              {director}
            </p>
            <p className='modaltext'>
              {' '}
              <b> Genres:</b> {genres}
            </p>
            <p className='modaltext'>
              {' '}
              <b> Actors: </b> {actors}
            </p>
            <p className='modaltext'>
              {' '}
              <b> Year: </b> {year}{' '}
            </p>
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
