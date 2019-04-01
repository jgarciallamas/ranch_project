import React from 'react';

const Sensors = props => {
  const {sensor} = props;
  const icon = 'https://app.ranchsystems.com/rsapp15/images/sensors/';

  return(
    <div>
      <p className="mb-0"><strong>{sensor.last.time}</strong></p>
      <p className="d-inline-block">{sensor.dsc} <mark>{sensor.lv}</mark></p>
      <img alt={sensor.dsc} src={`${icon}${sensor.icn}`} />
    </div>
  )
}

export default Sensors;