import React, { useEffect, useState, useContext } from 'react';

import './Directory.css';
import { fetchAllForcesData } from '../../utils/api';
import AllForcesList from '../../Components/AllForcesList/AllForcesList';
import { LoadingContext } from '../../contexts/LoadingContext';
import Filter from '../../Components/Filter/Filter';

const Directory = () => {
  const [allForces, setAllForces] = useState([]);
  const [filter, setFilter] = useState('');
  const { isLoading, setLoading } = useContext(LoadingContext);

  useEffect(() => {
    setLoading(true);
    fetchAllForcesData().then((data) => setAllForces(data));
    setLoading(false);
  }, [setLoading]);

  const handleFilter = (event) => {
    setFilter(event.target.value);
  };

  const filteredForce = allForces.filter((force) =>
    force.name.includes(filter)
  );

  return (
    <div className='directory'>
      <Filter handleFilter={handleFilter} filter={filter} />
      <AllForcesList filteredForce={filteredForce} isLoading={isLoading} />
    </div>
  );
};
export default Directory;
