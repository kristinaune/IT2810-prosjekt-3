import { Dispatch } from 'react';
import { MovieType } from '../../types';
import { SEARCH_BY_TITLE } from './actionTypes';

export const searchMovieTitle = (search: string, movies: Array<MovieType>) => (
  dispatch: Dispatch<Object>
) => {
  dispatch({
    type: SEARCH_BY_TITLE,
    search: search,
    movies: movies,
  });
};
