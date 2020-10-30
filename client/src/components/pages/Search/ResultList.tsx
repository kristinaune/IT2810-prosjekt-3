import React, { ReactElement, useState } from 'react';
import { IMovie } from '../../../types';
import SearchListMovieItem from './SearchListMovieItem';
import paginator from '../../../utilities/paginator';

/**
 * Shows all movies from a search in a list
 * @param movies List of movies from search
 */
const ResultList = ({ movies }: { movies: IMovie[] }): ReactElement => {
  // Number of movies to be displayed. Used in pagination.
  const [movieCount, setMovieCount] = useState(20);

  // Pagination listener/function.
  paginator(setMovieCount, 10);

  return (
    <section>
      {movies
        ?.slice(0, Math.min(movieCount, movies.length))
        .map((movie: IMovie) => {
          return (
            movie && <SearchListMovieItem key={movie.imdbId} movie={movie} />
          );
        })}
    </section>
  );
};

export default ResultList;
