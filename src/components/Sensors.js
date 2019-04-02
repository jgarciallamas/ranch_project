import React from 'react';

const Sensors = props => {
  const {sensor} = props;
  const icon = 'https://app.ranchsystems.com/rsapp15/images/sensors/';

  return(
    <div>
      <p className="card-text mb-0"><strong>{sensor.last.time}</strong></p>
      <p className="card-text d-inline-block">{sensor.dsc} <span className="badge badge-primary">{sensor.lv}</span></p>
      <img alt={sensor.dsc} src={`${icon}${sensor.icn}`} />
    </div>
  )
}

export default Sensors;