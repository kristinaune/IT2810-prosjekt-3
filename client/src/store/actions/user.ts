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
} from './actionTypes';
import api from '../../utilities/api';
import { Dispatch } from 'react';
import { returnErrors } from './error';

//load user. Make a request to routers/users

export const load_user = () => async (dispatch: Dispatch<Object>) => {
  try {
    const res = await api.get('/user');
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status));
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
      payload: res.data,
    });
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status));
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

export const login = (email: String) => async (dispatch: Dispatch<Object>) => {
  const body = JSON.stringify({ email });

  try {
    const res = await api.post('/users/login', body);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status));
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

export const addmovie = (imdbId: String, email: String) => async (
  dispatch: Dispatch<Object>
) => {
  console.log('Adding movie...');
  const body = JSON.stringify({ imdbId, email });
  try {
    console.log('Trying to save movie with ', email, 'and', imdbId);
    const res = await api.post('/users/addmovie', body);
    dispatch({
      type: ADD_MOVIE_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ADD_MOVIE_ERROR,
    });
  }
};

export const getmovielist = (email: String) => async (
  dispatch: Dispatch<Object>
) => {
  //const body = JSON.stringify({email});
  console.log('Trying to get movielist for.. ', email);
  try {
    const res = await api.get('/users/movielist/' + email);
    dispatch({
      type: GET_MOVIELIST,
      payload: res.data.movielist,
    });
  } catch (err) {
    dispatch({
      type: GET_MOVIELIST_ERROR,
    });
  }
};
