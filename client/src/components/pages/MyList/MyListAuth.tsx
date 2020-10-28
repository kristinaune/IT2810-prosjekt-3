import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { MovieType, StoreState, UserType } from '../../../types';
import { startAddMovie } from '../../../store/actions/user';
import MovieCard from '../../MovieItem';
import paginator from '../../../utilities/paginator';
import { startGetMovies } from '../../../store/actions/movies';

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
  const movieList = user.movieList;
  return (
    <div className='container'>
      Showing {user.name}'s movies
      {user.movieList && movies ? (
        movies
          .slice(0, Math.min(movieCount, movies.length))
          .filter((movie) => movieList!.includes(movie.imdbId))
          .map((movie: MovieType) => {
            return <MovieCard key={movie.imdbId} movie={movie} />;
          })
      ) : (
        <div> No movies </div>
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
