import React from 'react';
import { Link } from 'react-router-dom';

const Property = (props) => {
  const { property } = props;
  
  // const trigger = () => console.log('clicked');
  const date = new Date(property.lasttime);
  return(
    <div className="shadow my-5 bg-light rounded">
      <h4>{ property.title }</h4>
      <p className="lead">Last valid data: { date.toLocaleString() }</p>
      {/* <button onClick={handleInfo}>{property.rsuname} Info</button> */}
      <Link to={`/property/${property.rsuname}`} className="btn btn-info">{property.rsuname}</Link>
    </div>
  )
}

export default Property;