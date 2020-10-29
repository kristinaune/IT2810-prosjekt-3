import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { MovieType, StoreState, UserType } from '../../../types';
import { startAddMovie } from '../../../store/actions/user';
import MovieItem from '../../MovieItem';
import paginator from '../../../utilities/paginator';
import { startGetMovies } from '../../../store/actions/movies';
import MovieList from '../MovieList';

// component thats rendering if user is authenticated
const MyListAuth = ({
  user,
  movies,
  startGetMovies,
}: {
  user: UserType;
  movies: MovieType[];
  startGetMovies: () => void;
}) => {
  useEffect(() => {
    startGetMovies();
  }, [startGetMovies]);

  // Trigger rerender
  useEffect(() => {
    console.log(user.movieList?.length);
  }, [user.movieList?.length]);
  const [movieCount, setMovieCount] = useState(20);

  paginator(setMovieCount, 10);

  const listMovies = movies
    .slice(0, Math.min(movieCount, movies.length))
    .filter((movie) => user.movieList?.includes(movie.imdbId));
    console.log(listMovies);
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
