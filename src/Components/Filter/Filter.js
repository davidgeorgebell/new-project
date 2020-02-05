import React from 'react';

import './Filter.css';

const Filter = ({ handleFilter, filter, allForces }) => {
  return (
    <div className='filter-wrapper'>
      <select className='filter-select' value={filter} onChange={handleFilter}>
        {allForces.map((force) => (
          <option className='filter-option' value={force.name}>
            {force.name}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Filter;
