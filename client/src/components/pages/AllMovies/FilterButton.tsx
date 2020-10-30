import React, { ReactElement } from 'react';

/**
 * A button toggling a genre in movie-filter.
 * @param genre The genre the button toggles in filter.
 */
const FilterButton = ({
  genre,
  genres,
  updateGenres,
}: {
  genre: string;
  genres: string[];
  updateGenres: (genre: string) => void;
}): ReactElement => {
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
