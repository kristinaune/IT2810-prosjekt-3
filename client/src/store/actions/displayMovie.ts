import { SET_DISPLAY_MOVIE, CLOSE_MODAL } from './actionTypes';
import { Dispatch } from 'react';
import { MovieType } from '../../types';
import { AnyAction } from 'redux';

// ______ACTION CREATORS______

// SET DISPLAY MOVIE
export const setDisplayMovie = (movie: MovieType): AnyAction => ({
  type: SET_DISPLAY_MOVIE,
  movie,
});

// CLOSE MODAL
export const closeModal = (): AnyAction => ({
  type: CLOSE_MODAL,
});

// _________ACTION DISPATCHERS_________

/**
 * Displays a movie in a modal
 * @param movie Movie to be displayed in modal
 */
export const startSetDisplayMovie = (movie: MovieType) => (
  dispatch: Dispatch<AnyAction>
): void => {
  dispatch(setDisplayMovie(movie));
};

/**
 * Closes the modal.
 */
export const startCloseModal = () => (dispatch: Dispatch<AnyAction>): void => {
  dispatch(closeModal());
};
