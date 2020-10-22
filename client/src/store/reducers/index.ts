import { combineReducers } from 'redux';
import movies from './movieReducer';
import user from './userReducer';
import errors from './errorReducer';


export default combineReducers({ movies, user, errors});
