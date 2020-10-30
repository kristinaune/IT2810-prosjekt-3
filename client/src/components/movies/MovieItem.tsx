import React, { ReactElement } from 'react';
import { MovieType } from '../../types';
import { connect } from 'react-redux';
import { startSetDisplayMovie } from '../../store/actions/displayMovie';
import './MovieItem.css';

/**
 * A card-display of a specific movie.
 * @param movie Movie being displayed
 * @param startSetDisplayMovie Action dispatcher displaying movie in a modal
 */
const MovieItem = ({
  movie,
  startSetDisplayMovie,
}: {
  movie: MovieType;
  startSetDisplayMovie: (movie: MovieType) => void;
}): ReactElement => {
  const { poster, year, title } = movie;

  return (
    <div className='movieItem' onClick={() => startSetDisplayMovie(movie)}>
      <div className='movieItemTitle'>
        <span>
          {title} ({year})
        </span>
      </div>
      <img alt='poster' src={poster} />
    </div>
  );
};

export default connect(null, { startSetDisplayMovie })(MovieItem);
