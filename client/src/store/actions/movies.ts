import {
  LOAD_MOVIES,
  SEARCH_MOVIES,
  FILTER_MOVIES,
  LOAD_MOVIES_ERROR,
} from './actionTypes';
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
      type: SEARCH_MOVIES,
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
 * Filters movies by a set of filter criterias.
 * @param genres Genres to filter on
 * @param fromYear Earliest year in filter
 * @param toYear Last year in filter
 * @param ratedFrom Highest rating in filter
 * @param ratedTo Highest rating in filter
 */
export const filter_movies = (
  genres: string[],
  fromYear: number,
  toYear: number,
  ratedFrom: number,
  ratedTo: number
) => async (dispatch: Dispatch<Object>) => {
  try {
    const res = await api.get(
      '/movies/movies/filter/' +
        [JSON.stringify(genres), fromYear, toYear, ratedFrom, ratedTo].join('/')
    );

    dispatch({
      type: FILTER_MOVIES,
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
