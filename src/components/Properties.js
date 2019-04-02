import React from 'react';
import Property from './Property';

const Properties = (props) => {
  const { properties } = props;
  return(
    <React.Fragment>
      <h1 className="mt-5 text-info">Properties</h1>
      <ul className="p-0">
        {properties.length < 1 && <div>No properties yet</div>}
        {properties.map(property => <Property key={property.rsuname} property={property} />)}
      </ul>
    </React.Fragment>
  )
};

export default Properties;