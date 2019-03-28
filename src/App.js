import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Properties from './components/Properties';
import Detailed from './components/Detailed';
import { urlRequest, user } from './helper';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component {

  state = {
    properties: [],
  };

  

  clearState = () => {
    this.setState({ 
      // properties: [],
      propstat: {},
      rmsmap: []
    });
  }
  
  render() {
    console.log('propstat', this.state.properties);
    return (
      <Router>
        <div className="App">
          {/* <Header clearState={this.clearState}/> */}
          <Header />
          <Switch >
            <Route exact path="/" render={ () => <Properties properties={this.state.properties} handleInfo={this.handleInfo} user={user} />} />
            <Route path="/property/:rsuname" render={ props => <Detailed rsuname={props.match.params.rsuname} />} />
          </ Switch >
        </div>
      </ Router>
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
