import { SET_DISPLAY_MOVIE, CLOSE_MODAL } from '../actions/actionTypes';
import { MovieType } from '../../types';

export default (
  state = null,
  action: { type: string; movie: MovieType | null }
): MovieType | null => {
  const { type, movie } = action;
  switch (type) {
    case SET_DISPLAY_MOVIE:
      return movie;
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
};
