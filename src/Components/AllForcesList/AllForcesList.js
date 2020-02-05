import React from 'react';

import './AllForcesList.css';
import ForceItem from '../ForceItem/ForceItem';

const AllForcesList = ({ allForces }) => {
  return (
    <div>
      <ul>
        {allForces.map((force) => (
          <ForceItem key={force.id} id={force.id} force={force} />
        ))}
      </ul>
    </div>
  );
};
export default AllForcesList;
