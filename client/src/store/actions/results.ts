import { Dispatch } from "react";
import { MovieType } from "../../types";
import { SEARCH_BY_TITLE } from "./actionTypes";

/**
 * An action that filters the movies in our result-list by a search-word.
 * @param search The search word in the query
 * @param movies The list of movies we're searching from.
 */
export const search_movie_title = (search: string, movies: Array<MovieType>) => (
  dispatch: Dispatch<Object>
) => {
  dispatch({
    type: SEARCH_BY_TITLE,
    search: search,
    movies: movies,
  });
};
