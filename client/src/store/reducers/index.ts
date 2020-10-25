import { combineReducers } from 'redux';
import movies from './movieReducer';
import displayMovie from './displayMovieReducer';
import user from './userReducer';

export default combineReducers({ movies, user, displayMovie });
