import { SET_DISPLAY_MOVIE, CLOSE_MODAL } from '../actions/actionTypes';
import { MovieType } from '../../types';

export default (state = {}, action: { type: string; movie?: MovieType }) => {
  const { type, movie } = action;
  switch (type) {
    case SET_DISPLAY_MOVIE:
      return movie;
    case CLOSE_MODAL:
      return {};
    default:
      return state;
  }
};
