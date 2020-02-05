import React from 'react';

import './AllForcesList.css';
import ForceItem from '../ForceItem/ForceItem';

const AllForcesList = ({ allForces, isLoading }) => {
  return (
    <div className='all-forces-list'>
      {isLoading ? (
        <h1>Loading!</h1>
      ) : (
        <ul>
          {allForces.map((force) => (
            <ForceItem key={force.id} id={force.id} force={force} />
          ))}
        </ul>
      )}
    </div>
  );
};
export default AllForcesList;
