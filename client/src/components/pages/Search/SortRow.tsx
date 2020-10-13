import React, { Fragment, useState } from 'react';
import SortButton from './SortButton';

const SortRow = () => {
  const [activeSort, setActiveSort] = useState<string>('rating');
  const [sortDirection, setSortDirection] = useState<boolean>(true);

  const handleSort = (attribute: string) => {
    activeSort === attribute && setSortDirection((dir) => !dir);
    setActiveSort(attribute);
  };

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
