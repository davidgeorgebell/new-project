import React, { useEffect, useState } from 'react';

import './Directory.css';
import { fetchAllForcesData } from '../../api';
import AllForcesList from '../../Components/AllForcesList/AllForcesList';

const Directory = () => {
  const [allForces, setAllForces] = useState([]);

  useEffect(() => {
    const fetchAllForcesData = async () => {
      try {
        const dataResponse = await fetch(`https://data.police.uk/api/forces`);
        const data = await dataResponse.json();

        setAllForces(data);
      } catch (err) {
        console.log('ERROR fetching data');
      }
    };
    fetchAllForcesData();
  }, []);
  return (
    <div className='directory'>
      <ul>
        {allForces &&
          allForces.map((force) => <li key={force.id}>{force.name}</li>)}
      </ul>
    </div>
  );
};
export default Directory;
