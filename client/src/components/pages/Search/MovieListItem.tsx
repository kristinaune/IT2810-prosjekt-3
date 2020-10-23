import React from 'react';
import { MovieType } from '../../../types';

const MovieListItem = ({ movie }: { movie: MovieType }) => {
  const { title, year, poster, rating, director, actors, plot } = movie;
  return (
    <div className='movieListItem'>
      <img alt='poster' src={poster} />
      <div className='textInfo'>
        <h2>{`${title} (${year})`}</h2>
        <h4 className='rating'>Rated {rating.toPrecision(2)} / 10</h4>
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

export default MovieListItem;
