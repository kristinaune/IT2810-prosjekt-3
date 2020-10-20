import userEvent from '@testing-library/user-event';
import {
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  USER_LOADED,
  REGISTER_SUCCESS,
  GET_MOVIELIST,
  GET_MOVIELIST_ERROR
} from '../actions/actionTypes';

const initialState = {
  isAuthenticated: false,
  user: null,
};
export default (
  state = initialState,
  action: {
    type: string;
    payload: any;
  }
) => {
  const { type, payload } = action;
  switch (type) {
    case USER_LOADED:
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: payload,
      };
    case LOGOUT_SUCCESS:
    case AUTH_ERROR:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    case GET_MOVIELIST:
      return {
        payload
      };
    case GET_MOVIELIST_ERROR:
      return [false, payload.content];

    default:
      return state;
  }
};
