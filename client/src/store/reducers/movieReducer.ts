import {
  LOAD_MOVIES,
  SEARCH_MOVIES,
  FILTER_MOVIES,
  LOAD_MOVIES_ERROR,
} from '../actions/actionTypes';
import { MovieType, MoviesState } from '../../types';

export default (
  state = { movies: [] },
  action: { type: string; payload: MovieType[] }
): MoviesState => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_MOVIES:
    case SEARCH_MOVIES:
    case FILTER_MOVIES:
      return { movies: payload, type };
    case LOAD_MOVIES_ERROR:
      return { movies: state.movies, type };
    default:
      return state;
  }
};

db.createUser({
  user: 'userAdmin',
  pwd: 'password',
  roles: [
    { role: 'userAdminAnyDatabase', db: 'admin' },
    'readWriteAnyDatabase',
  ],
});
