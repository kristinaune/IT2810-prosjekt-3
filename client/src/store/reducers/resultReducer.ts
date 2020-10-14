import { SEARCH_AND_SORT } from '../actions/actionTypes';
import { MovieType } from '../../types';
import movieSearch from '../utils/movieSearch';

export default (
  state = [],
  action: {
    type: string;
    search?: string;
    movies?: Array<MovieType>;
    sortAttr?: string;
    sortDir?: number;
  }
) => {

  switch (action.type) {
    case SEARCH_AND_SORT:
      const { search, movies, sortAttr, sortDir } = action;
      console.log(action);
      
       // Uses movieSearch() to filter our movie-array, and add the result
       // in our results-array.
      return (
        movies &&
          (movieSearch(search!, movies).sort((a, b) => (a[sortAttr!] - b[sortAttr!])*sortDir!) ||
        false)
      );
    default:
      return state;
  }
};
