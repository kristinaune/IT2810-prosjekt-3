import { LOAD_MOVIES, LOAD_MOVIES_ERROR } from './actionTypes';
import { Sort } from '../../types';
import api from '../../utilities/api';
import { Dispatch } from 'react';

/**
 * An action that populates Redux' state with movies retrieved from the REST API.
 * Should only be called once in the runtime of the application.
 * If no movies are found, return the error-response.
 */
export const get_movies = () => async (dispatch: Dispatch<Object>) => {
  try {
    const res = await api.get('/movies');

    dispatch({
      type: LOAD_MOVIES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: LOAD_MOVIES_ERROR,
      payload: {
        status: err.response,
        content: false,
      },
    });
  }
};

/**
 * Searches for a sorted array of movies.
 * @param search String were searching for
 * @param attribute Attribute were sorting on
 * @param direction Direction were sorting in
 */
export const search_movies = (
  search: string,
  attribute: Sort.YEAR | Sort.RATING | Sort.RUNTIME,
  direction: Sort.ASC | Sort.DESC
) => async (dispatch: Dispatch<Object>) => {
  try {
    // Ensure that search is never empty
    search = search ? search : ' ';
    const res = await api.get(
      '/movies/search/' + search + '/' + attribute + '/' + direction + '/'
    );

    dispatch({
      type: LOAD_MOVIES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: LOAD_MOVIES_ERROR,
      payload: {
        status: err.response,
        content: false,
      },
    });
  }
};
