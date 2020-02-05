import React from 'react';

import './Filter.css';

const Filter = ({ handleFilter, filter }) => {
  return (
    <div className='filter-wrapper'>
      <select className='filter-select' value={filter} onChange={handleFilter}>
        <option className='filter-option' value='Humberside Police'>
          Humberside
        </option>
        <option className='filter-option' value='Essex Police'>
          Essex Police
        </option>
      </select>
    </div>
  );
};
export default Filter;
