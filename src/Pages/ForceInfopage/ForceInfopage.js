import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';

import ForceInfoItem from '../../Components/ForceInfoItem/ForceInfoItem';
import { fetchSpecificForceData } from '../../utils/api';
import { LoadingContext } from '../../contexts/LoadingContext';

const ForceInfopage = () => {
  const { setLoading } = useContext(LoadingContext);
  const [forceInformation, setForceInformation] = useState([]);

  const nameOfForce = useParams().id;

  useEffect(() => {
    setLoading(true);
    fetchSpecificForceData(nameOfForce).then((data) =>
      setForceInformation(data)
    );
    setLoading(false);
  }, [setLoading, nameOfForce]);

  const { engagement_methods = [] } = forceInformation;

  return (
    <div className='force-info-page-wrapper'>
      <ForceInfoItem
        forceInformation={forceInformation}
        engagement_methods={engagement_methods}
      />
    </div>
  );
};
export default ForceInfopage;
