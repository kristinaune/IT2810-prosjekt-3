import React, { useState } from 'react';
import { connect } from 'react-redux';
import { searchMovieTitle } from '../store/actions/results';
import { MovieType } from '../types';
import Movie from './Movie';
import './MovieList.css';

const MovieList = ({
  movies,
  results,
  searchMovieTitle,
}: {
  movies?: Array<MovieType>;
  results?: Array<MovieType>;
  searchMovieTitle?: Function;
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

  const styleSearch = {
    borderRadius: '30px',
    border: '1px solid #ddd',
    width: '600px',
    background: '#F2F1F9',

    marginTop: '200px',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  return (
    <div className='movieList'>
      {!!searchMovieTitle && (
        <input
          style={styleSearch}
          className='input'
          placeholder='i.e Spiderman'
          type='text'
          onChange={(e) => {
            setMovieCount(20);
            searchMovieTitle(e.target.value, movies);
          }}
        ></input>
      )}
      {results &&
        results
          .slice(0, Math.min(movieCount, results.length))
          .map((movie: any) => {
            return <Movie key={movie.imdbId} {...movie} />;
          })}
      <button className='button' type='submit'>
        {' '}
        Search
      </button>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return { movies: state.movies, results: state.results };
};

// const mapDispatchToProps = () => {
//   return {
//     searchMovieTitle,
//   };
// };

export default connect(mapStateToProps, { searchMovieTitle })(MovieList);
