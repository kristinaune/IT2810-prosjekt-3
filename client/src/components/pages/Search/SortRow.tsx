import React, { Fragment } from 'react';
import SortButton from './SortButton';

const SortRow = ({
  activeSort,
  sortDirection,
  handleSort,
}: {
  activeSort: string;
  sortDirection: number;
  handleSort: Function;
}) => {
  return (
    <Fragment>
      <div id='buttonContainer'>
        <SortButton
          attribute='Year'
          active={activeSort === 'year'}
          direction={sortDirection}
          handleSort={handleSort}
        />
        <SortButton
          attribute='Rating'
          active={activeSort === 'rating'}
          direction={sortDirection}
          handleSort={handleSort}
        />
        <SortButton
          attribute='Runtime'
          active={activeSort === 'runtime'}
          direction={sortDirection}
          handleSort={handleSort}
        />
      </div>
    </Fragment>
  );
};

export default SortRow;
