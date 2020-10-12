import React, { useState } from 'react';
import { connect } from 'react-redux';
import { MovieType } from '../types';
import Movie from './Movie';
import './Movies.css';
import { getMovies } from '../store/actions/movies';

const Movies = ({
  movies,
  results,
  getMovies,
}: {
  movies?: Array<MovieType>;
  results?: Array<MovieType>;
  getMovies?: Function;
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
    <div className='movies'>
      Alle filmer i databasen: 
      {getMovies}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return { movies: state.movies, results: state.results };
};

export default connect(mapStateToProps, { getMovies })(Movies);
