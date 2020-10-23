import { combineReducers } from 'redux';
import movies from './movieReducer';
import user from './userReducer';

export default combineReducers({ movies, user });
