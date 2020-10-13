import React from 'react';
import { connect } from 'react-redux';
import { MovieType } from '../../../types';
import Movie from '../../Movie';

const MyListAuth = ({
  mylistmovies,
  name,
}: {
  mylistmovies?: Array<MovieType>;
  name: String;
}) => {
  return (
    <div className='container'>
      {' '}
      Showing {name}'s movies
      {mylistmovies ? (
        mylistmovies.map((movie: any) => {
          return <Movie key={movie.imdbId} {...movie} />;
        })
      ) : (
        <div> No movies </div>
      )}
      .
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    mylistmovies: state.user.user.mylistmovies,
    name: state.user.user.user.name,
  };
};

export default connect(mapStateToProps, {})(MyListAuth);
//export default connect(mapStateToProps, { searchMovieTitle })(MovieList);
