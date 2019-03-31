import React from 'react';
import { urlRequest } from '../helper';

class Detailed extends React.Component {

  state = {
    propstat: {},
    rmsmap: [],
    isLoading: true
  }

  componentDidMount() {
    
    const property = this.props.rsuname;
    fetch(`${urlRequest}propstat&prop=${property}`)
      .then(res => res.json())
      .then(propstat => {
        console.log('propstat --> ', propstat);
        this.setState({ propstat:propstat });
        fetch(`${urlRequest}rmsmap&prop=${property}`)
        .then(res => res.json())
        .then(rmsmap => {
          console.log('rmsmap --> ', rmsmap);
          this.setState({ rmsmap:rmsmap.units, isLoading:false })
        })
        .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }
  render() {
  const  { rsuname } = this.props;
  const  { propstat, rmsmap } = this.state;
  
    console.log('Detailed propstat --> ', propstat);
  
  
    return (
      <div>
        <p>{rsuname}</p>
        {this.state.isLoading ? (
          <p>Text Loading...</p>
        ):(
          <div>
            <p>HealthIndex Property {propstat.healthindex}</p>
            <p>Last Valid Data {propstat.datatime}</p>
      
           {rmsmap.map(unit => (
             
            <div className="mt-5 bg-light border" key={unit.rsuid}>
              {/* <p>{console.log('sensors length', unit.sensors.length)}</p> */}
              <p>{unit.loc}</p>
              <p>RS Type Unit {unit.type} #{unit.rsuid}</p>
              <p>RS Serial Number {unit.rsuid}</p>
              {
                unit.sensors.map((sensor) => {
                  if( 10 === sensor.prt && 0 === sensor.sprt ) {
                    return (
                    <div key={sensor.id}>
                      <p>{sensor.last.time}</p>
                      <p>{sensor.dsc} {sensor.lv}</p>
                    </div>
                    );
                  } 
                  if( 25 === sensor.rst || 400 === sensor.rst ) {
                    return (
                    <div key={sensor.id}>
                      <p>{sensor.last.time}</p>
                      <p>{sensor.dsc} {sensor.lv}</p>
                    </div>
                    );
                  } 
                })
              }
              
            </div>
          ))}
        </div>
        )}
      </div>
    )
  }
}

export default Detailed;