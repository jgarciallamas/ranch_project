import React from 'react';
import Sensors from './Sensors';
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
        // console.log('propstat --> ', propstat);
        this.setState({ propstat:propstat });
        fetch(`${urlRequest}rmsmap&prop=${property}`)
        .then(res => res.json())
        .then(rmsmap => {
          // console.log('rmsmap --> ', rmsmap);
          this.setState({ rmsmap:rmsmap.units, isLoading:false })
        })
        .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }
  render() {
  const  { rsuname } = this.props;
  const  { propstat, rmsmap } = this.state;
  
    // console.log('Detailed propstat --> ', propstat);
  
  
    return (
      <div>
        <h2 className="mt-5 text-primary">{rsuname}</h2>
        {this.state.isLoading ? (
          <p>Data Loading...</p>
        ):(
          <div>
            <div className="alert alert-info">
              <p><em>HealthIndex Property</em> <span className="badge badge-primary">{propstat.healthindex}</span></p>
              <p><em>Last Valid Data</em><strong> {propstat.datatime}</strong></p>
            </div>
      
           {rmsmap.map(unit => (
             
            
            <div className="card mb-3" key={unit.rsuid}>
            <div className="card-body">
              <h4 className="card-title">{unit.loc}</h4>
              <p className="card-text mb-0">RS Type Unit {unit.type} #{unit.rsuid}</p>
              <p className="card-text">RS Serial Number {unit.rsuid}</p>
              {
                unit.sensors.map((sensor) => {
                  if( 10 === sensor.prt && 0 === sensor.sprt ) {
                    return (
                      <Sensors key={sensor.id} sensor={sensor} />
                    );
                  } 
                  if( 25 === sensor.rst || 400 === sensor.rst || 325 === sensor.rst || 22 === sensor.rst ) {
                    return (
                      <Sensors key={sensor.id} sensor={sensor} />
                    );
                  } 
                  return;
                })
              }
              </div>
            </div>
          ))}
        </div>
        )}
      </div>
    )
  }
}

export default Detailed;