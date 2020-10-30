import {
  REGISTER_ERROR,
  LOGIN_ERROR,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  ADD_MOVIE_SUCCESS,
  ADD_MOVIE_ERROR,
  REMOVE_MOVIE_SUCCESS,
  REMOVE_MOVIE_ERROR,
} from './actionTypes';
import api from '../../utilities/api';
import { Dispatch } from 'react';
import { AnyAction } from 'redux';
import { IUser } from '../../types';

// ______ACTION CREATORS______

// REGISTER SUCCESS
export const register = (user: IUser): AnyAction => ({
  type: REGISTER_SUCCESS,
  user,
});

// REGISTER ERROR
export const registerError = (errorMsg: string): AnyAction => ({
  type: REGISTER_ERROR,
  errorMsg,
});

// LOG IN
export const login = (user: IUser): AnyAction => ({
  type: LOGIN_SUCCESS,
  user,
});

// LOG IN ERROR
export const loginError = (errorMsg: string): AnyAction => ({
  type: LOGIN_ERROR,
  errorMsg,
});

// LOG OUT
export const logout = (): AnyAction => ({
  type: LOGOUT_SUCCESS,
});

// ADD MOVIE
export const addMovie = (user: IUser): AnyAction => ({
  type: ADD_MOVIE_SUCCESS,
  user,
});

// ADD MOVIE ERROR
export const addMovieError = (): AnyAction => ({
  type: ADD_MOVIE_ERROR,
});

// REMOVE MOVIE
export const removeMovie = (user: IUser): AnyAction => ({
  type: REMOVE_MOVIE_SUCCESS,
  user,
});

// REMOVE MOVIE ERROR
export const removeMovieError = (): AnyAction => ({
  type: REMOVE_MOVIE_ERROR,
});

// _________ACTION DISPATCHERS_________

/**
 * Registers a new user in the database
 * @param name Name of the new user
 * @param email New user's email
 */
export const startRegister = (name: string, email: string) => async (
  dispatch: Dispatch<AnyAction>
): Promise<void> => {
  const body = JSON.stringify({ name, email });

  api
    .post('/users/register', body)
    .then((res) => {
      dispatch(register(res.data.user));
    })
    .catch((err) => {
      dispatch(registerError(err.response.data.msg));
    });
};

/**
 * Logs a user in.
 * @param email Email of user logging in.
 */
export const startLogin = (email: string) => async (
  dispatch: Dispatch<AnyAction>
): Promise<void> => {
  const body = JSON.stringify({ email });

  api
    .post('/users/login', body)
    .then((res) => {
      dispatch(login(res.data.user));
    })
    .catch((err) => {
      dispatch(loginError(err.response.data.msg));
    });
};

/**
 * Starts startLogout process.
 */
export const startLogout = () => (dispatch: Dispatch<AnyAction>): void => {
  dispatch(logout());
};

/**
 * Adds a movie to a user's "My List"
 * @param imdbId imdbId of movie to be added
 * @param email Email address of user adding movie to list
 */
export const startAddMovie = (imdbId: string, email: string) => async (
  dispatch: Dispatch<AnyAction>
): Promise<void> => {
  const body = JSON.stringify({ imdbId, email });
  console.log('noe');

  api
    .post('/users/addMovie', body)
    .then((res) => {
      dispatch(addMovie(res.data.user));
    })
    .catch(() => {
      dispatch(addMovieError());
    });
};

/**
 * Removes a movie from users "My List"
 * @param imdbId imdbId of movie to be removed
 * @param email Email address of user removing movie from list
 */
export const startRemoveMovie = (imdbId: string, email: string) => async (
  dispatch: Dispatch<AnyAction>
): Promise<void> => {
  api
    .delete('users/deleteMovie/' + email + '/' + imdbId)
    .then((res) => {
      dispatch(removeMovie(res.data.user));
    })
    .catch((err) => {
      dispatch(removeMovieError());
    });
};
