import React, { ReactElement, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { MovieType, StoreState, UserType } from '../../../types';
import { startAddMovie } from '../../../store/actions/user';
import paginator from '../../../utilities/paginator';
import { startGetMovies } from '../../../store/actions/movies';
import MovieList from '../../movies/MovieList';

/**
 * Renders "My List" - if user is authenticated.
 */
const MyListAuth = ({
  user,
  movies,
  startGetMovies,
}: {
  user: UserType;
  movies: MovieType[];
  startGetMovies: () => void;
}): ReactElement => {
  // On first mount, get all movies from database
  useEffect(() => {
    startGetMovies();
  }, [startGetMovies]);

  // Trigger rerender
  const movieListLength = user.movieList?.length;
  useEffect(() => {}, [movieListLength]);
  const [movieCount, setMovieCount] = useState(20);

  // Paginator, loading more movies when we scroll to bottom of page.
  paginator(setMovieCount, 20);

  const listMovies = movies
    .slice(0, Math.min(movieCount, movies.length))
    // Only show movies in both MyList and "all movies" from database
    .filter((movie) => user.movieList?.includes(movie.imdbId));

  return (
    <div className='container'>
      Showing {user.name}'s movies
      {listMovies.length > 0 ? (
        <MovieList movies={listMovies} />
      ) : (
        <div>
          <h3> No movies. Add a movie to your list in Search or All movies</h3>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state: StoreState) => {
  return {
    user: state.user,
    movies: state.movies.movies,
  };
};

export default connect(mapStateToProps, { startAddMovie, startGetMovies })(
  MyListAuth
);
