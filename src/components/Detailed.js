import React from 'react';

const Detailed = (props) => {

  const { rsuname, propstat, rmsmap } = props;
  console.log('Detailed propstat --> ', propstat);
  return (
    <div>
      <p>{rsuname}</p>
      {/* {propstat === null && <div>Loading information</div>} */}
      <p>HealthIndex Property {propstat.healthindex}</p>
      <p>Last Available Data {propstat.datatime}</p>
      {rmsmap.map(unit => (
        <div key={unit.rsuid}>
          
          <p>RS Type Unit {unit.type}</p>
          <p>RS Serial Number {unit.rsuid}</p>
        </div>
        
      ))}
      
    </div>
  
  )
}

export default Detailed;