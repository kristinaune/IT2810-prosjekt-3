import {
  AUTH_ERROR,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  USER_LOADED,
  LOGOUT_SUCCESS,
} from './actionTypes';
import api from '../../utilities/api';
import { Dispatch } from 'react';

//load user. Make a request to routers/users

export const load_user = () => async (dispatch: Dispatch<Object>) => {
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
  console.log('Registerer action');

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
    console.log('Trying to log in');
    console.log(body);
    const res = await api.post('/users/login', body, config);
    console.log(res);
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
