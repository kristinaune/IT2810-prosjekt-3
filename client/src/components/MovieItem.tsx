import React from 'react';
import { MovieType } from '../types';
import { connect } from 'react-redux';
import { startSetDisplayMovie } from '../store/actions/displayMovie';
import './MovieItem.css';
import '../App.css';

/**
 * A card-display of a specific movie.
 * @param movie Movie being displayed
 * @param startSetDisplayMovie Action dispatcher displaying movie in a modal
 */
const MovieCard = ({
  movie,
  startSetDisplayMovie,
}: {
  movie: MovieType;
  startSetDisplayMovie: Function;
}) => {
  const { poster, year, title } = movie;

  return (
    <div className='movieItem' onClick={() => startSetDisplayMovie(movie)}>
      <div className='poster'>
        <img alt='poster' src={poster} />
      </div>
      <div className='title'>
        <h5>
          {title} ({year})
        </h5>
      </div>
    </div>
  );
};

export default connect(null, { startSetDisplayMovie })(MovieCard);
