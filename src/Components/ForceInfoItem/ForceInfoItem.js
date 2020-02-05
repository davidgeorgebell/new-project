import React from 'react';

const ForceInfoItem = ({ forceInformation, engagement_methods }) => {
  return (
    <div className='force-info-item-wrapper'>
      <ul className='force-info-item-list'>
        <li className='force-info-item-list-item'>{forceInformation.name}</li>
        <li className='force-info-item-list-item'>
          {forceInformation.telephone}
        </li>
        <li className='force-info-item-list-item'>
          <a href={forceInformation.url}>{forceInformation.url}</a>
        </li>
      </ul>
      <ul>
        {engagement_methods.map((method) => {
          return (
            <li className='lang' key={method.url}>
              <a href={method.url}>{method.title}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ForceInfoItem;
