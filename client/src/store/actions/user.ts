import {
  AUTH_ERROR,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  USER_LOADED,
  LOGOUT_SUCCESS,
  ADD_TO_MOVIE_LIST,
  ADD_TO_MOVIE_LIST_ERROR,
} from './actionTypes';
import api from '../../utilities/api';
import { Dispatch } from 'react';
import { MovieType } from '../../types';

//load user. Make a request to routers/users

export const loadUser = () => async (dispatch: Dispatch<Object>) => {
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };

  try {
    const res = await api.get('/user', config);
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};
export const register = ({
  name,
  email,
}: {
  name: String;
  email: String;
}) => async (dispatch: Dispatch<Object>) => {
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };
  const body = JSON.stringify({ name, email });

  try {
    const res = await api.post('/users/register', body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

export const login = (email: String) => async (dispatch: Dispatch<Object>) => {
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };
  const body = JSON.stringify({ email });

  try {
    const res = await api.post('/users/login', body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
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
