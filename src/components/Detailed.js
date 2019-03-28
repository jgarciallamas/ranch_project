import React from 'react';
import { urlRequest, user } from '../helper';

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
            <p>Last Available Data {propstat.datatime}</p>
      
           {rmsmap.map(unit => (
            <div key={unit.rsuid}>
              
              <p>RS Type Unit {unit.type}</p>
              <p>RS Serial Number {unit.rsuid}</p>
            </div>
          ))}
        </div>
        )}
      </div>
    )
  }
}

export default Detailed;