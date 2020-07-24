import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import ParkIndex from './ParkIndex';
import ParkPage from './ParkPage';
import ParkCard from './ParkCard';
import UserPage from './UserPage';

class App extends React.Component {
  state={
    parks: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/parks')
    .then(resp=>resp.json())
    .then(parks=>this.setState({parks: parks}))
  }
  render(){  
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/parks/:id' render={()=> <ParkPage />} />
          <Route path='/user/:id' render={()=> <UserPage />} />
          <Route path='/parks' render={()=> <ParkIndex parks={this.state.parks}/>} />
          <Route exact path='/' render={()=> <Home />} />
        </Switch>
      </div>
    );
  }
}

export default App;
