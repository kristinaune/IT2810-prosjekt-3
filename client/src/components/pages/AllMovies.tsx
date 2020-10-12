import React from 'react';
import Movies from '../Movies';
import { connect } from 'react-redux';

const AllMovies = () => {
  return (
    <div className='container'>
      <Movies />
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return { movies: state.movies, results: state.results };
};

export default connect(mapStateToProps)(AllMovies);
