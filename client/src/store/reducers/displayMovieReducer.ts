import { SET_DISPLAY_MOVIE, CLOSE_MODAL } from '../actions/actionTypes';
import { MovieType } from '../../types';

export default (
  state = { display: false, movie: undefined },
  action: { type: string; display: boolean; movie?: MovieType }
) => {
  const { type, display, movie } = action;
  switch (type) {
    case SET_DISPLAY_MOVIE:
      return { display, movie };
    case CLOSE_MODAL:
      return { display };
    default:
      return state;
  }
};
