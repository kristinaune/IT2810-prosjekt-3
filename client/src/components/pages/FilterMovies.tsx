import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import FilterButton from './FilterButton';
import { filter_movies } from '../../store/actions/movies';
import Nouislider from 'nouislider-react';
import './noUiSlider.css';

const FilterMovies = ({ filter_movies }: { filter_movies: Function }) => {
  //
  const [genres, setGenres] = useState<string[]>([]);
  const [yearRange, setYearRange] = useState<number[]>([1900, 2020]);
  const [ratingRange, setRatingRange] = useState<number[]>([0, 10]);

  /**
   * Adds or removes a genre from "genres"
   * @param genre The genre were adding or removing from "genres"
   */
  const updateGenres = (genre: string) => {
    // IF "genre" in "genres"...
    genres.includes(genre)
      ? // ...remove genre from filter,
        setGenres(genres.filter((g) => g !== genre))
      : // ELSE add genre to filter
        setGenres([...genres, genre]);
  };

  // useEffect fires filter_movies() every time the filters change
  useEffect(() => {
    filter_movies(genres, yearRange, ratingRange);
  }, [genres, yearRange, ratingRange, filter_movies]);

  return (
    <div>
      <div className='filter'>
        {[
          'Comedy',
          'War',
          'Action',
          'Sci-Fi',
          'Drama',
          'Crime',
          'Thriller',
        ].map((genre) => {
          return (
            <FilterButton
              key={genre}
              genre={genre}
              updateGenres={updateGenres}
              genres={genres}
            />
          );
        })}
      </div>
      <div className='sliders'>
        <div className='filterSlider'>
          <h3>
            Released between {yearRange[0]} and {yearRange[1]}
          </h3>
          <Nouislider
            range={{ min: 1900, max: 2020 }}
            start={[1900, 2020]}
            step={1}
            connect={true}
            behaviour='drag'
            onUpdate={(e) => {
              let [from, to] = e;
              setYearRange([Number(from), Number(to)]);
            }}
          />
        </div>
        <div className='filterSlider'>
          <h3>
            IMDb-rating from {ratingRange[0]} to {ratingRange[1]}
          </h3>
          <Nouislider
            range={{ min: 0, max: 10 }}
            start={[0, 10]}
            step={0.1}
            connect={true}
            behaviour='drag'
            onUpdate={(e) => {
              let [from, to] = e;
              setRatingRange([Number(from), Number(to)]);
            }}
          />
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  filter_movies,
};

export default connect(null, mapDispatchToProps)(FilterMovies);
