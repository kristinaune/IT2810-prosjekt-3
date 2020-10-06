import {
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
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
    case LOGIN_SUCCESS:
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

    default:
      return state;
  }
};
