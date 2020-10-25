import {
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  USER_LOADED,
  REGISTER_SUCCESS,
} from '../actions/actionTypes';
import { User } from '../../types/index';

const initialState = { authState: [false, LOGOUT_SUCCESS] };
export default (
  state = initialState,
  action: {
    type: string;
    user?: User;
  }
) => {
  const { type, user } = action;
  switch (type) {
    case USER_LOADED:
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return { ...user, authState: [1, type] };
    case LOGOUT_SUCCESS:
    case AUTH_ERROR:
      return { authState: [0, type] };
    default:
      return state;
  }
};
