import React, { useEffect, useState } from 'react';
import { get_movies } from '../../store/actions/movies';
import { connect } from 'react-redux';
import { MovieType } from '../../types';
import MovieCard from '../MovieItem';
import './AllMovies.css';

const AllMovies = ({
  movies,
  get_movies,
}: {
  movies?: Array<MovieType>;
  get_movies: Function;
}) => {
  const [movieCount, setMovieCount] = useState(20);

  useEffect(() => {
    get_movies();
  }, [get_movies]);

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
        movies[0] &&
        movies
          .slice(0, Math.min(movieCount, movies.length))
          .map((movie: MovieType) => {
            return <MovieCard key={movie.imdbId} movie={movie} />;
          })}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return { movies: state.movies };
};

const mapDispatchToProps = {
  get_movies,
};

export default connect(mapStateToProps, mapDispatchToProps)(AllMovies);
