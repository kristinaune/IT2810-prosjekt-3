import { combineReducers } from 'redux';
import movies from './movieReducer';
import results from './resultReducer';
import user from './userReducer';

export default combineReducers({ movies, results, user });
