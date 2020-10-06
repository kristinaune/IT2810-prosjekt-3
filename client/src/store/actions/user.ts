import { AUTH_ERROR, USER_LOADED } from './actionTypes';
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
