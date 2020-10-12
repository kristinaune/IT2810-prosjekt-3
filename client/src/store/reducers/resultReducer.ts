import { SEARCH_BY_TITLE } from '../actions/actionTypes';
import { MovieType } from '../../types';
import movieSearch from '../utils/movieSearch';

export default (
  state = [],
  action: {
    type: string;
    payload?: any;
    search?: string;
    movies?: Array<MovieType>;
  }
) => {
  const { type, search, movies } = action;

  switch (type) {
    case SEARCH_BY_TITLE:
      return (
        (movies &&
          movies.filter((movie: MovieType) => {
            return movieSearch(search!, movie);
          })) ||
        false
      );
    default:
      return state;
  }
};
