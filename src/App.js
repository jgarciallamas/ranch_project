import React from 'react';
import Header from './components/Header';
import Properties from './components/Properties';
import { urlRequest, user } from './helper';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component {

  state = {
    properties: []
  };

  handleInfo = (event) => {
    event.preventDefault();
    console.log(event.target.childNodes[1].nodeValue);
    const property = event.target.childNodes[1].nodeValue;
    fetch(`${urlRequest}propstat&prop=${property}`)
      .then(res => res.json())
      .then(propstat => {
        console.log('propstat --> ', propstat);
        fetch(`${urlRequest}rmsmap&prop=${property}`)
        .then(res => res.json())
        .then(fullInfo => console.log('rmsmap --> ', fullInfo))
        .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <Properties properties={this.state.properties} handleInfo={this.handleInfo} user={user}/>
      </div>
    );
  }

  componentDidMount() {
    
    fetch(`${urlRequest}props`)
      .then(res => res.json())
      .then(properties => {
        this.setState({ properties: properties.props })
        console.log('props --> ',properties);

      })
      .catch(err => console.log(err));
  }
}

export default App;
