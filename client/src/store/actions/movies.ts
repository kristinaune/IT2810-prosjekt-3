import {
  LOAD_MOVIES,
  SEARCH_MOVIES,
  FILTER_MOVIES,
  LOAD_MOVIES_ERROR,
} from './actionTypes';
import { MovieType, Sort } from '../../types';
import api from '../../utilities/api';
import { Dispatch } from 'react';
import { AnyAction } from 'redux';

// _________ACTION CREATORS_________

// LOAD_MOVIES_ERROR
export const loadMoviesError = (): AnyAction => ({
  type: LOAD_MOVIES_ERROR,
  payload: [false],
});

// GET_MOVIES
export const getMovies = (movies: MovieType[]): AnyAction => ({
  type: LOAD_MOVIES,
  payload: movies,
});

// SEARCH_MOVIES
export const searchMovies = (movies: MovieType[]): AnyAction => ({
  type: SEARCH_MOVIES,
  payload: movies,
});

// FILTER_MOVIES
export const filterMovies = (movies: MovieType[]): AnyAction => ({
  type: FILTER_MOVIES,
  payload: movies,
});

// _________ACTION DISPATCHERS_________

/**
 * Fetches all movies in database
 */
export const startGetMovies = () => async (
  dispatch: Dispatch<AnyAction>
): Promise<void> => {
  api
    .get('/movies')
    .then((res) => {
      dispatch(getMovies(res.data));
    })
    .catch(() => {
      dispatch(loadMoviesError());
    });
};

/**
 * Searches for a sorted array of movies.
 * @param search String were searching for
 * @param attribute Attribute were sorting on
 * @param direction Direction were sorting in
 */
export const startSearchMovies = (
  search: string,
  attribute: Sort.YEAR | Sort.RATING | Sort.RUNTIME,
  direction: Sort.ASC | Sort.DESC
) => async (dispatch: Dispatch<AnyAction>): Promise<void> => {
  // Ensure that search is never empty
  search = search ? search : ' ';
  api
    .get('/movies/search/' + search + '/' + attribute + '/' + direction + '/')
    .then((res) => {
      dispatch(searchMovies(res.data));
    })
    .catch(() => {
      dispatch(loadMoviesError());
    });
};

/**
 * Filters movies by a set of filter criterias.
 * @param genres Genres to filter on
 * @param yearRange Range of years to filter on
 * @param ratingRange Range of ratings to filter on
 */
export const filter_movies = (
  genres: string[],
  yearRange: number[],
  ratingRange: number[]
) => async (dispatch: Dispatch<AnyAction>): Promise<void> => {
  api
    .get(
      '/movies/filter/' +
        [
          JSON.stringify(genres),
          yearRange[0],
          yearRange[1],
          ratingRange[0],
          ratingRange[1],
        ].join('/')
    )
    .then((res) => {
      dispatch(filterMovies(res.data));
    })
    .catch(() => {
      dispatch(loadMoviesError());
    });
};
