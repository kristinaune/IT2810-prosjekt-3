import React , {useState} from 'react';
import { connect } from 'react-redux';
import { MovieType } from '../../../types';
import { addmovie } from '../../../store/actions/user';
import Movie from '../../Movie';

// component thats rendering if user is authenticated
const MyListAuth = ({
  user,
  addmovie,
  name,
  movieList,
  movies

}: {
  user?: Object;
  addmovie: Function;
  name: String;
  movieList: Array<String>;
  movies: Array<MovieType>;
}) => {
  let [movieCount, setMovieCount] = useState(20);


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
    {console.log(movieList)}
      Showing {name}'s movies
      {movieList && movies ?
        movies
        .filter(movie => movieList.includes(movie.imdbId))
        .slice(0, Math.min(movieCount, movies.length))
        .map((movie: any) => {
       
            return <Movie key={movie.imdbId} {...movie} {...user} addmovietolist = {addmovie}/>;
          }) : <div> No movies </div>}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    movieList: state.user.user.user.movieList,
    user: state.user,
    email: state.user.user.user.email,
    name: state.user.user.user.name,
    movies: state.movies,
  };
};

export default connect(mapStateToProps, {addmovie})(MyListAuth);
//export default connect(mapStateToProps, { searchMovieTitle })(MovieList);
