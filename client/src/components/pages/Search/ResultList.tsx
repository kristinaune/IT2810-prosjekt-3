import React, { useState } from 'react';
import { MovieType } from '../../../types';
import MovieListItem from './MovieListItem';

const ResultList = ({ movies }: { movies: MovieType[] | undefined }) => {
  // Number of movies to be displayed. Used in pagination.
  let [movieCount, setMovieCount] = useState(20);

  /**
   * When user nears bottom of page, increase setMovieCount by 10
   * so more movies can be displayed. A way of implementing smooth pagination.
   * @param e Scroll event
   */
  window.onscroll = (e: Event) => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.scrollHeight - 200
    ) {
      setMovieCount((m) => m + 10);
    }
  };

  return (
    <section>
      {movies
        ?.slice(0, Math.min(movieCount, movies.length))
        .map((movie: MovieType) => {
          return movie && <MovieListItem key={movie.imdbId} movie={movie} />;
        })}
    </section>
  );
};

export default ResultList;
