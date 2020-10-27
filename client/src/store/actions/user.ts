import {
  AUTH_ERROR,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  USER_LOADED,
  LOGOUT_SUCCESS,
  ADD_MOVIE_SUCCESS,
  ADD_MOVIE_ERROR,
  GET_MOVIELIST,
  GET_MOVIELIST_ERROR,
  REMOVE_MOVIE_SUCCESS,
  REMOVE_MOVIE_ERROR,
} from './actionTypes';
import api from '../../utilities/api';
import { Dispatch } from 'react';

//load user. Make a request to routers/users

export const load_user = () => async (dispatch: Dispatch<Object>) => {
  try {
    const res = await api.get('/user');
    dispatch({
      type: USER_LOADED,
      user: res.data.user,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};
export const register = (name: string, email: string) => async (
  dispatch: Dispatch<Object>
) => {
  const body = JSON.stringify({ name, email });

  try {
    const res = await api.post('/users/register', body);
    dispatch({
      type: REGISTER_SUCCESS,
      user: res.data.user,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

export const login = (email: string) => async (dispatch: Dispatch<Object>) => {
  const body = JSON.stringify({ email });

  try {
    const res = await api.post('/users/login', body);
    dispatch({
      type: LOGIN_SUCCESS,
      user: res.data.user,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

export const logout = () => (dispatch: Dispatch<Object>) => {
  dispatch({
    type: LOGOUT_SUCCESS,
  });
};

export const add_movie = (imdbId: string, email: string) => async (
  dispatch: Dispatch<Object>
) => {
  const body = JSON.stringify({ imdbId, email });
  try {
    const res = await api.post('/users/addmovie', body);
    dispatch({
      type: ADD_MOVIE_SUCCESS,
      user: res.data.user,
    });
  } catch (err) {
    dispatch({
      type: ADD_MOVIE_ERROR,
    });
  }
};

export const remove_movie = (imdbId: string, email: string) => async (
  dispatch: Dispatch<Object>
) => {
  try {
    const res = await api.delete('users/deleteMovie/' + email + '/' + imdbId);
    dispatch({
      type: REMOVE_MOVIE_SUCCESS,
      user: res.data.user,
    });
  } catch (err) {
    dispatch({
      type: REMOVE_MOVIE_ERROR,
    });
  }
};

export const getmovielist = (email: string) => async (
  dispatch: Dispatch<Object>
) => {
  try {
    const res = await api.get('/users/movielist/' + email);
    dispatch({
      type: GET_MOVIELIST,
      user: res.data.user,
    });
  } catch (err) {
    dispatch({
      type: GET_MOVIELIST_ERROR,
    });
  }
};
