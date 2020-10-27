import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  USER_LOADED,
  REGISTER_SUCCESS,
  LOGIN_ERROR,
  REGISTER_ERROR,
} from '../actions/actionTypes';
import { UserType, UserState } from '../../types/index';

const initialState = { authState: { auth: false, type: LOGOUT_SUCCESS } };
export default (
  state = initialState,
  action: {
    type: string;
    user?: UserType;
    errorMsg?: string;
  }
): UserState => {
  const { type, user, errorMsg } = action;
  switch (type) {
    case USER_LOADED:
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return { ...user, authState: { auth: true, type } };
    case LOGOUT_SUCCESS:
    case LOGIN_ERROR:
    case REGISTER_ERROR:
      return { authState: { auth: false, type }, errorMsg };
    default:
      return state;
  }
};
