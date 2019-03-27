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
    propstat: {},
    rmsmap: []
  };

  handleInfo = (event) => {
    // event.preventDefault();
    // console.log(event.target.childNodes[0].nodeValue);
    console.log(event.target.innerHTML);
    // const property = event.target.childNodes[0].nodeValue;
    const property = event.target.innerHTML;
    fetch(`${urlRequest}propstat&prop=${property}`)
      .then(res => res.json())
      .then(propstat => {
        console.log('propstat --> ', propstat);
        this.setState({ propstat:propstat });
        fetch(`${urlRequest}rmsmap&prop=${property}`)
        .then(res => res.json())
        .then(rmsmap => {
          console.log('rmsmap --> ', rmsmap);
          this.setState({ rmsmap:rmsmap.units })
        })
        .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }

  clearState = () => {
    this.setState({ 
      // properties: [],
      propstat: {},
      rmsmap: []
    });
  }
  
  render() {
    return (
      <Router>
        <div className="App">
          <Header clearState={this.clearState}/>
          <Switch >
            <Route exact path="/" render={ () => <Properties properties={this.state.properties} handleInfo={this.handleInfo} user={user} />} />
            <Route path="/property/:rsuname" render={ props => <Detailed rsuname={props.match.params.rsuname} propstat={this.state.propstat} rmsmap={this.state.rmsmap}/>} />
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
