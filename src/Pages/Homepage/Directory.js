import React, { useEffect, useState } from 'react';

import './Directory.css';
import { fetchAllForcesData } from '../../utils/api';
import AllForcesList from '../../Components/AllForcesList/AllForcesList';

const Directory = () => {
  const [allForces, setAllForces] = useState([]);

  useEffect(() => {
    fetchAllForcesData().then((data) => setAllForces(data));
  }, []);
  return (
    <div className='directory'>
      <AllForcesList allForces={allForces} />
    </div>
  );
};
export default Directory;
