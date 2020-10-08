import {
  AUTH_ERROR,
  REGISER_SUCCESS,
  LOGIN_SUCCESS,
  USER_LOADED,
} from './actionTypes';
import api from '../../utilities/api';
import { Dispatch } from 'react';

//load user. Make a request to routers/users

export const loadUser = () => async (dispatch: Dispatch<Object>) => {
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };

  try {
    const res = await api.get('/users/user', config);
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
export const register = (name: String, email: String) => async (
  dispatch: Dispatch<Object>
) => {
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };
  const body = JSON.stringify({ name, email });

  try {
    const res = await api.post('/users/user/register', body, config);
    dispatch({
      type: REGISER_SUCCESS,
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
    const res = await api.post('/users/user/login', body, config);
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
