import { GET_MOVIES_FROM_DB, GET_MOVIES_ERROR } from './actionTypes';
import api from '../../utilities/api';
import { Dispatch } from 'react';

export const getMovies = () => async (dispatch: Dispatch<Object>) => {
  try {
    const res = await api.get('/movies');

    dispatch({
      type: GET_MOVIES_FROM_DB,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_MOVIES_ERROR,
      payload: {
        status: err.response,
        content: false,
      },
    });
  }
};
