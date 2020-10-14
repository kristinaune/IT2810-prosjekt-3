import { Dispatch } from 'react';
import { MovieType } from '../../types';
import { SEARCH_AND_SORT } from './actionTypes';

/**
 * Dispatches a search-action to Redux
 * @param search Searchword
 * @param movies Movies we want to search on
 * @param sortAttr Attribute we want to sort on (year, rating or runtime)
 * @param sortDir Sorting direction, -1 for descending and 1 for ascending
 */
export const search_and_sort = (search: string, movies: Array<MovieType>, sortAttr: string, sortDir: number) => (
  dispatch: Dispatch<Object>
) => {
  dispatch({
    type: SEARCH_AND_SORT,
    search: search,
    movies: movies,
    sortAttr: sortAttr,
    sortDir: sortDir
  });
};