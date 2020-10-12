import { SEARCH_BY_TITLE } from "../actions/actionTypes";
import { MovieType } from "../../types";
import movieSearch from "../utils/movieSearch";

export default (
  state = [],
  action: {
    type: string;
    payload?: any;
    search?: string;
    movies?: Array<MovieType>;
  }
) => {
  const { type, search, movies } = action;

  switch (type) {
    case SEARCH_BY_TITLE:
       // Uses movieSearch() to filter our movie-array, and add the result
       // in our results-array.
      return (
        movies &&
          (movieSearch(search!, movies) ||
        false)
      );
    default:
      return state;
  }
};
