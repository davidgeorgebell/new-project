import React from 'react';
import { Link } from 'react-router-dom';

import './ForceItem.css';

const ForceItem = ({ force }) => {
  return (
    <div className='force-item-wrapper'>
      <li className='directory-link'>
        <Link to={`/info/${force.id}`}>{force.name}</Link>
      </li>
    </div>
  );
};
export default ForceItem;
