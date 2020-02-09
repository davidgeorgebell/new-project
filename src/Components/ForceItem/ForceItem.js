import React from 'react';
import { Link } from 'react-router-dom';

import './ForceItem.css';

const ForceItem = ({ force }) => {
  return (
    <div className='force-item-wrapper'>
      <Link to={`/info/${force.id}`}>
        <li className='directory-link'>{force.name}</li>
      </Link>
    </div>
  );
};
export default ForceItem;
