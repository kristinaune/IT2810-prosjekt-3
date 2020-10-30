import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import { MovieType, StoreState, UserType } from '../../types';
import { startAddMovie, startRemoveMovie } from '../../store/actions/user';
import './MovieModal.css';

/**
 * A component displaying a movie-object in a modal.
 */
const MovieModal = ({
  movie,
  startCloseModal,
  startAddMovie,
  startRemoveMovie,
  user,
}: {
  movie: MovieType;
  startCloseModal: () => void;
  startAddMovie: (imdbId: string, email: string) => void;
  startRemoveMovie: (imdbId: string, email: string) => void;
  user?: UserType;
}): ReactElement => {
  // Destructuring movie-prop
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
              <b> Plot: </b>
              {plot}
            </p>
            <p className='modaltext'>
              <b>Raiting: </b> {rating}
            </p>
            <p className='modaltext'>
              <b>Runtime: </b> {runtime} min
            </p>
            <p className='modaltext'>
              <b> Director: </b>
              {director}
            </p>
            <p className='modaltext'>
              <b> Genres:</b> {genres}
            </p>
            <p className='modaltext'>
              <b> Actors: </b> {actors}
            </p>
            <p className='modaltext'>
              <b> Year: </b> {year}
            </p>
            {user?.email &&
              (user.movieList?.includes(movie.imdbId) ? (
                <button
                  className='movieListButton'
                  onClick={(e) => {
                    e.preventDefault();
                    startRemoveMovie(movie.imdbId, user!.email!);
                  }}
                >
                  Remove from movielist
                </button>
              ) : (
                <button
                  className='movieListButton'
                  onClick={(e) => {
                    e.preventDefault();

                    startAddMovie(movie.imdbId, user!.email!);
                  }}
                >
                  Add to movielist
                </button>
              ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state: StoreState) => {
  return {
    displayMovie: state.displayMovie,
    user: state.user,
  };
};

export default connect(mapStateToProps, {
  startAddMovie,
  startRemoveMovie,
})(MovieModal);
