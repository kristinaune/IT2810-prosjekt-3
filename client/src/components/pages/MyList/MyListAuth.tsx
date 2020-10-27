import React, { useEffect, useState } from 'react';
import { get_movies } from '../../../store/actions/movies';
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
  get_movies,
}: {
  user?: Object;
  email: string;
  name: string;
  movieList: Array<string>;
  movies: Array<MovieType>;
  get_movies: Function;
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
  useEffect(() => {
    get_movies();
  }, [get_movies]);

  return (
    <div>
    <div className = 'description'>
      Showing {name}'s movies
    </div>
      {console.log(movieList, movies)}
      {(movieList.length > 0) && movies ? (
        <div className = 'myListMovies'> 
        {movies
          ?.slice(0, Math.min(movieCount, movies.length))
          .filter((movie) => movieList.includes(movie.imdbId))
          .map((movie: any) => {
            return <MovieCard key={movie.imdbId} movie= {movie} />;
          }) 
        } </div>)
       : (
        <div> <p></p>No movies. Click on any movie in 'Search' or 'All Movies' to add to your list </div>
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
const mapDispatchToProps = {
  get_movies,
};


export default connect(mapStateToProps, mapDispatchToProps)(MyListAuth);
//export default connect(mapStateToProps, { searchMovieTitle })(MovieList);
