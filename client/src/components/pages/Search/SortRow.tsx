import React, { Fragment } from 'react';
import { Sort } from '../../../types';
import SortButton from './SortButton';

const SortRow = ({
  activeSort,
  sortDirection,
  handleSort,
}: {
  activeSort: Sort.YEAR | Sort.RATING | Sort.RUNTIME;
  sortDirection: Sort.ASC | Sort.DESC;
  handleSort: Function;
}) => {
  return (
    <Fragment>
      <div id='buttonContainer'>
        <SortButton
          attribute='Year'
          active={activeSort === Sort.YEAR}
          direction={sortDirection}
          handleSort={handleSort}
        />
        <SortButton
          attribute='Rating'
          active={activeSort === Sort.RATING}
          direction={sortDirection}
          handleSort={handleSort}
        />
        <SortButton
          attribute='Runtime'
          active={activeSort === Sort.RUNTIME}
          direction={sortDirection}
          handleSort={handleSort}
        />
      </div>
    </Fragment>
  );
};

export default SortRow;
