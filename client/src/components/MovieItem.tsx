import React from 'react';
import { MovieType } from '../types';
import { connect } from 'react-redux';
import { set_display_movie } from '../store/actions/displayMovie';
import './MovieItem.css';
import '../App.css';

/**
 * A card-display of a specific movie.
 * @param movie Movie being displayed
 * @param set_display_movie Action dispatcher displaying movie in a modal
 */
const MovieCard = ({
  movie,
  set_display_movie,
}: {
  movie: MovieType;
  set_display_movie: Function;
}) => {
  const { poster, year, title } = movie;

  return (
    <div className='movieItem' onClick={() => set_display_movie(movie)}>
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

export default connect(null, { set_display_movie })(MovieCard);
