import React, { useEffect, useState, useContext } from 'react';

import './Directory.css';
import { fetchAllForcesData } from '../../utils/api';
import AllForcesList from '../../Components/AllForcesList/AllForcesList';
import { LoadingContext } from '../../contexts/LoadingContext';

const Directory = () => {
  const [allForces, setAllForces] = useState([]);
  const { isLoading, setLoading } = useContext(LoadingContext);

  useEffect(() => {
    setLoading(true);
    fetchAllForcesData().then((data) => setAllForces(data));
    setLoading(false);
  }, [setLoading]);
  return (
    <div className='directory'>
      <AllForcesList allForces={allForces} isLoading={isLoading} />
    </div>
  );
};
export default Directory;
