import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import FilterButton from './FilterButton';
import { startFilterMovies } from '../../store/actions/movies';
import Nouislider from 'nouislider-react';
import './noUiSlider.css';

const FilterMovies = ({
  startFilterMovies,
}: {
  startFilterMovies: (
    genres: string[],
    yearRange: [number, number],
    raingRange: [number, number]
  ) => void;
}) => {
  //
  const [genres, setGenres] = useState<string[]>([]);

  // Using different states for displayed year/rating range
  // and actual filtering range, so we can display different ranges
  // to the user without sending a request to the backend for every change.
  // A startFilterMovies-action will be dispatched whenever the user _stops_
  // dragging the handle.
  const [yearRange, setYearRange] = useState<[number, number]>([1900, 2020]);
  const [displYearRange, setDisplYearRange] = useState<[number, number]>([
    1900,
    2020,
  ]);
  const [ratingRange, setRatingRange] = useState<[number, number]>([0, 10]);
  const [displRatingRange, setDisplRatingRange] = useState<[number, number]>([
    0,
    10,
  ]);

  /**
   * Adds or removes a genre from "genres"
   * @param genre The genre were adding or removing from "genres"
   */
  const updateGenres = (genre: string): void => {
    // IF "genre" in "genres"...
    genres.includes(genre)
      ? // ...remove genre from filter,
        setGenres(genres.filter((g) => g !== genre))
      : // ELSE add genre to filter
        setGenres([...genres, genre]);
  };

  // useEffect fires startFilterMovies() every time the filters change
  useEffect(() => {
    startFilterMovies(genres, yearRange, ratingRange);
  }, [genres, yearRange, ratingRange, startFilterMovies]);

  return (
    <section className='filterMovies'>
      <div className='filterButtons'>
        {[
          'Comedy',
          'Action',
          'Sci-Fi',
          'Drama',
          'Crime',
          'Thriller',
          'War',
          'Adventure',
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
            Released between {displYearRange[0]} and {displYearRange[1]}
          </h3>
          <Nouislider
            range={{ min: 1900, max: 2020 }}
            start={[1900, 2020]}
            step={1}
            connect={true}
            behaviour='drag'
            // Fires whenever user drags handle
            onUpdate={(e) => {
              const [from, to] = e;
              setDisplYearRange([Number(from), Number(to)]);
            }}
            // Fires whenever user lets go of handle
            onChange={(e) => {
              const [from, to] = e;
              setYearRange([Number(from), Number(to)]);
            }}
          />
        </div>
        <div className='filterSlider'>
          <h3>
            IMDb-rating from {displRatingRange[0]} to {displRatingRange[1]}
          </h3>
          <Nouislider
            range={{ min: 0, max: 10 }}
            start={[0, 10]}
            step={0.1}
            connect={true}
            behaviour='drag'
            // Fires whenever user drags handle
            onUpdate={(e) => {
              const [from, to] = e;
              setDisplRatingRange([Number(from), Number(to)]);
            }}
            // Fires whenever user lets go of handle
            onChange={(e) => {
              const [from, to] = e;
              setRatingRange([Number(from), Number(to)]);
            }}
          />
        </div>
      </div>
    </section>
  );
};

const mapDispatchToProps = {
  startFilterMovies,
};

export default connect(null, mapDispatchToProps)(FilterMovies);
