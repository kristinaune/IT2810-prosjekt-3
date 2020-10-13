import React from 'react';

const SortButton = ({
  attribute,
  active,
  direction,
  handleSort,
}: {
  attribute: string;
  active: boolean;
  direction: boolean;
  handleSort: Function;
}) => {
  return (
    <div
      className={active ? 'sortButton active' : 'sortButton'}
      onClick={() => handleSort(attribute.toLowerCase())}
    >
      <div>
        {
          <span className='material-icons sortArrow'>
            {direction ? 'south' : 'north'}
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
