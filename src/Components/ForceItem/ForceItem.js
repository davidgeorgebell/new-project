import React from 'react';

import './ForceItem.css';

const ForceItem = ({ force }) => {
  return (
    <div>
      <li>{force.name}</li>
    </div>
  );
};
export default ForceItem;
