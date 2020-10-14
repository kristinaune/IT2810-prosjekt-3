import React from 'react';

const SortButton = ({
  attribute,
  active,
  direction,
  handleSort,
}: {
  attribute: string;
  active: boolean;
  direction: number;
  handleSort: Function;
}) => {
  return (
    <div
      className={active ? 'sortButton active' : 'sortButton'}
      onClick={() => handleSort(attribute.toLowerCase(), direction)}
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
    </div>
  );
};

export default SortButton;