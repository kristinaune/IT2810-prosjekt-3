import React from 'react';

const FilterButton = ({
  genre,
  genres,
  updateGenres,
}: {
  genre: string;
  genres: string[];
  updateGenres: Function;
}) => {
  return (
    <button
      className={
        genres.includes(genre) ? 'filterButton active' : 'filterButton'
      }
      onClick={() => updateGenres(genre)}
    >
      {genre}
    </button>
  );
};

export default FilterButton;
