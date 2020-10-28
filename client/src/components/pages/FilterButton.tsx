import React from 'react';

const FilterButton = ({
  genre,
  genres,
  updateGenres,
}: {
  genre: string;
  genres: string[];
  updateGenres: (genre: string) => void;
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
