import React from 'react';
import { Link } from 'react-router-dom';

const Property = (props) => {
  const { property, handleInfo } = props;
  
  // const trigger = () => console.log('clicked');
  const date = new Date(property.lasttime);
  return(
    <div className="mb-3 bg-light border rounded border-success">
      <h4>{ property.title }</h4>
      <p>Last access: { date.toLocaleString() }</p>
      {/* <button onClick={handleInfo}>{property.rsuname} Info</button> */}
      <Link to={`/property/${property.rsuname}`} >{property.rsuname}</Link>
    </div>
  )
}

export default Property;