import { combineReducers } from 'redux';
import movies from './movieReducer';
import results from './resultReducer';
import users from './userReducer';

export default combineReducers({ movies, results, users });
