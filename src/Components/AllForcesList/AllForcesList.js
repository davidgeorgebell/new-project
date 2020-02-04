import React from 'react';

import './AllForcesList.css';
import ForceItem from '../ForceItem/ForceItem';

const AllForcesList = ({ allForces }) => {
  return (
    <div>
      {allForces.map((force) => (
        <ForceItem key={force.id} id={force.id} force={force} />
      ))}
    </div>
  );
};
export default AllForcesList;
