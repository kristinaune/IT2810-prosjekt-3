import { GET_MOVIES_FROM_DB, GET_MOVIES_ERROR } from './actionTypes';
import api from '../../utilities/api';
import { Dispatch } from 'react';

/**
 * An action that populates Redux' state with movies retrieved from the REST API.
 * Should only be called once in the runtime of the application.
 * If no movies are found, return the error-response.
 */
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
