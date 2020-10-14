import React, { useState } from 'react';

import { connect } from 'react-redux';
import { MovieType } from '../../types';
import Movie from '../Movie';
import './AllMovies.css';

const AllMovies = ({ movies }: { movies?: Array<MovieType> }) => {
  let [movieCount, setMovieCount] = useState(100);

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
      <div className='filter'>
        <button className='button1'> Comedy</button>
        <button className='button1'> War</button>
        <button className='button1'> Action</button>
        <button className='button1'> SciFi</button>
        <button className='button1'> Drama</button>
        <button className='button1'> Crime</button>
      </div>
      {/* <div className='container'>
        <header>
          Filter your search
          <button type='button' className='button'>
            {' '}
            Sjanger
          </button>
          <div className='dropdown'>
            <ul>
              <li>Comedy</li>
              <li>Action</li>
              <li>Scifi</li>
              <li>Romantic</li>
            </ul>
          </div>
        </header>
      </div> */}

      {movies &&
        movies
          .slice(0, Math.min(movieCount, movies.length))
          .map((movie: any) => {
            return <Movie key={movie.imdbId} {...movie} />;
          })}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return { movies: state.movies };
};

export default connect(mapStateToProps)(AllMovies);
