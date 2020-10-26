import {
  LOAD_MOVIES,
  SEARCH_MOVIES,
  FILTER_MOVIES,
  LOAD_MOVIES_ERROR,
} from '../actions/actionTypes';
import { MovieType } from '../../types';

export default (
  state = [false],
  action: { type: string; payload: MovieType[] }
) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_MOVIES:
    case SEARCH_MOVIES:
    case FILTER_MOVIES:
      return payload;
    case LOAD_MOVIES_ERROR:
      return [false, payload];
    default:
      return state;
  }
};
