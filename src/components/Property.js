import React from 'react';

const Property = (props) => {
  const { property, handleInfo } = props;
  
  
  const date = new Date(property.lasttime);
  return(
    <div>
      <h4>{ property.title }</h4>
      <p>Last access: { date.toLocaleString() }</p>
      <button onClick={handleInfo}>{property.rsuname} Info</button>
    </div>
  )
}

export default Property;