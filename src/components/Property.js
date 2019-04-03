import React from 'react';
import { Link } from 'react-router-dom';

const Property = (props) => {
  const { property } = props;
  const date = new Date(property.lasttime);

  return(
    <div className="shadow my-5 bg-light rounded">
      <h4>{ property.title }</h4>
      <p className="lead">Last valid data: { date.toLocaleString() }</p>
      <Link to={`/property/${property.rsuname}`} className="btn btn-info">{property.rsuname}</Link>
    </div>
  )
}

export default Property;