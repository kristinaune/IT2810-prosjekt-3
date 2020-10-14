import React from 'react';
import { connect } from 'react-redux';
import { MovieType } from '../../../types';
import Movie from '../../Movie';

// component thats rendering if user is authenticated
const MyListAuth = ({
  movielist,
  name,
}: {
  movielist?: Array<string>;
  name: String;
}) => {
  console.log(movielist);
  return (
    <div className='container'>
      Showing {name}'s movies
      {/* Add functionality for showing movies in list */}
      <div> No movies </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    movielist: state.user.user.user.movielist,
    name: state.user.user.user.name,
  };
};

export default connect(mapStateToProps, {})(MyListAuth);
//export default connect(mapStateToProps, { searchMovieTitle })(MovieList);
