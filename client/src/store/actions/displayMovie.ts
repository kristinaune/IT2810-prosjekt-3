import { SET_DISPLAY_MOVIE, CLOSE_MODAL } from './actionTypes';
import { Dispatch } from 'react';
import { MovieType } from '../../types';

export const set_display_movie = (movie: MovieType) => (
  dispatch: Dispatch<Object>
) => {
  dispatch({
    type: SET_DISPLAY_MOVIE,
    movie,
  });
};

export const close_modal = () => (dispatch: Dispatch<Object>) => {
  dispatch({
    type: CLOSE_MODAL,
  });
};
