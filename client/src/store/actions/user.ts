import {
  REGISTER_ERROR,
  LOGIN_ERROR,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  ADD_MOVIE_SUCCESS,
  ADD_MOVIE_ERROR,
  GET_MOVIELIST,
  GET_MOVIELIST_ERROR,
} from './actionTypes';
import api from '../../utilities/api';
import { Dispatch } from 'react';

export const register = (name: string, email: string) => async (
  dispatch: Dispatch<Object>
) => {
  const body = JSON.stringify({ name, email });

  api
    .post('/users/register', body)
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        user: res.data.user,
      });
    })
    .catch((err) => {
      console.log(err.response.data.msg);
      dispatch({
        type: REGISTER_ERROR,
        errorMsg: err.response.data.msg,
      });
    });
};

export const login = (email: string) => async (dispatch: Dispatch<Object>) => {
  const body = JSON.stringify({ email });

  api
    .post('/users/login', body)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        user: res.data.user,
      });
    })
    .catch((err) => {
      console.log(err.response.data.msg);

      dispatch({
        type: LOGIN_ERROR,
        errorMsg: err.response.data.msg,
      });
    });
};

export const logout = () => (dispatch: Dispatch<Object>) => {
  dispatch({
    type: LOGOUT_SUCCESS,
  });
};

export const addmovie = (imdbId: string, email: string) => async (
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
