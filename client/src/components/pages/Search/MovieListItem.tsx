import React from 'react';
import { MovieType } from '../../../types';
import { set_display_movie } from '../../../store/actions/displayMovie';
import { connect } from 'react-redux';

const MovieListItem = ({
  movie,
  set_display_movie,
}: {
  movie: MovieType;
  set_display_movie: Function;
}) => {
  const { title, year, poster, rating, runtime, released, actors } = movie;
  return (
    <div
      className='movieListItem'
      onClick={() => {
        set_display_movie(movie);
      }}
    >
      <img alt='poster' src={poster} />
      <div className='textInfo'>
        <h2>{`${title} (${year})`}</h2>
        <div className='infoRow'>
          <div className='infoAttr'>
            <span className='material-icons'>date_range</span>
            <span>{released}</span>
          </div>
          <div className='infoAttr'>
            <span className='material-icons'>stars</span>
            <span>{rating.toPrecision(2) + ' / 10'}</span>
          </div>
          <div className='infoAttr'>
            <span className='material-icons'>timer</span>
            <span className=''>{runtime} min</span>
          </div>
        </div>
        <h4>
          Starring <b>{actors.slice(0, 3).join(', ')}</b>
        </h4>
        {/* <h4>
          Directed by <b>{director.join(', ')}</b>
        </h4> */}
      </div>
    </div>
  );
};

export default connect(null, { set_display_movie })(MovieListItem);
