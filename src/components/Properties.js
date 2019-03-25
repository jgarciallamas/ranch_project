import React from 'react';
import Property from './Property';

const Properties = (props) => {
  const { properties, handleInfo, user } = props;
  return(
    <React.Fragment>
      <h2><span>{`${user} `}</span>properties</h2>
      <ul>
        {properties.length < 1 && <div>No properties yet</div>}
        {properties.map(property => <Property key={property.rsuname} property={property} handleInfo={handleInfo}/>)}
      </ul>
    </React.Fragment>
  )
};

export default Properties;