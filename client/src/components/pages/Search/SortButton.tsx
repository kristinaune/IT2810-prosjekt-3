import React, { ReactElement } from 'react';
import { Sort } from '../../../types';

/**
 * Helper-method, converts string 'Year' to Sort.YEAR-enum and so on.
 * @param attr Attribute we want to convert to enum
 */
const stringToSortAttr = (
  attr: string
): Sort.YEAR | Sort.RATING | Sort.RUNTIME => {
  switch (attr) {
    case 'Year':
      return Sort.YEAR;
    case 'Rating':
      return Sort.RATING;
    case 'Runtime':
      return Sort.RUNTIME;
    default:
      return Sort.RATING;
  }
};

const SortButton = ({
  attribute,
  active,
  direction,
  handleSort,
}: {
  attribute: string;
  active: boolean;
  direction: number;
  handleSort: (attribute: Sort.YEAR | Sort.RATING | Sort.RUNTIME) => void;
}): ReactElement => {
  return (
    <div
      className={active ? 'sortButton active' : 'sortButton'}
      onClick={() => handleSort(stringToSortAttr(attribute))}
    >
      <div>
        {
          <span className='material-icons sortArrow'>
            {direction < 0 ? 'south' : 'north'}
          </span>
        }
      </div>
      <div>
        <span>{attribute}</span>
      </div>
      <div></div>
    </div>
  );
};

export default SortButton;
