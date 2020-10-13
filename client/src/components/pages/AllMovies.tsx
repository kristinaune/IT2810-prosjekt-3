import React, { useState } from 'react';

import { connect } from 'react-redux';
import { MovieType } from '../../types';
import Movie from '../Movie';
import './AllMovies.css';

const AllMovies = ({ movies }: { movies?: Array<MovieType> }) => {
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
    <section className='movies'>
      {movies
        ?.slice(0, Math.min(movieCount, movies.length))
        .map((movie: any) => {
          return <Movie key={movie.imdbId} {...movie} />;
        })}
    </section>
  );
};

const mapStateToProps = (state: any) => {
  return { movies: state.movies };
};

export default connect(mapStateToProps)(AllMovies);
