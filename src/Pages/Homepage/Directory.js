import React, { useEffect, useState } from 'react';

import './Directory.css';
import { fetchAllForcesData } from '../../api';
import AllForcesList from '../../Components/AllForcesList/AllForcesList';

const Directory = () => {
  const [allForces, setAllForces] = useState({});

  useEffect(() => {
    fetchAllForcesData().then((data) => setAllForces(data));
  }, []);
  return (
    <div className='directory'>
      {/* <ul>
        {allForces.map((force) => (
          <li key={force.id}>{force.name}</li>
        ))}
      </ul> */}
    </div>
  );
};
export default Directory;
