import React, { useState } from 'react';
import { connect } from 'react-redux';
import { MovieType } from '../../../types';
import MovieCard from '../../MovieItem';

// component thats rendering if user is authenticated
const MyListAuth = ({
  user,
  email,
  name,
  movieList,
  movies,
}: {
  user?: Object;
  email: string;
  name: string;
  movieList: Array<string>;
  movies: Array<MovieType>;
}) => {
  const [movieCount, setMovieCount] = useState(20);

  window.onscroll = function (e: any) {
    if (
      window.innerHeight + window.scrollY >=
      document.body.scrollHeight - 200
    ) {
      setMovieCount((m) => m + 10);
    }
  };

  return (
    <div className='container'>
      Showing {name}'s movies
      {movieList && movies ? (
        movies
          .slice(0, Math.min(movieCount, movies.length))
          .filter((movie) => movieList.includes(movie.imdbId))
          .map((movie: any) => {
            return (
              <MovieCard
                key={movie.imdbId}
                {...movie}
              />
            );
          })
      ) : (
        <div> No movies </div>
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    movieList: state.user.movieList,
    user: state.user,
    email: state.user.email,
    name: state.user.name,
    movies: state.movies,
  };
};

export default connect(mapStateToProps)(MyListAuth);
//export default connect(mapStateToProps, { searchMovieTitle })(MovieList);
