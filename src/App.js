import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import ParkIndex from './ParkIndex';
import ParkPage from './ParkPage';
import UserPage from './UserPage';
// import Auth from './Auth';

class App extends React.Component {
  state={
    parks: [],
    visited: [],
    userId: 1,
    comments: []
  }

  componentDidMount(){
    Promise.all([fetch('http://localhost:3000/api/v1/parks'), fetch(`http://localhost:3000/api/v1/user_parks`), fetch(`http://localhost:3000/api/v1/comments`)])
    .then(([res1, res2, res3]) => {
      return Promise.all([res1.json(), res2.json(), res3.json()])
    })
    .then(([res1, res2, res3]) => {
      this.setState({parks: res1})
      {let matched = res2.data.filter(re2 => re2.attributes.user.id === this.state.userId)
        this.setState({visited: matched})}
      this.setState({comments: res3})
    })
  }

  handleNewUserPark = (newUserPark) => {
    this.setState({ visited: [...this.state.visited, newUserPark.data] })
  }

  removeVistedPark=(id)=>{
    fetch(`http://localhost:3000/api/v1/user_parks/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(()=> {
      let filteredVisitedParks = this.state.visited.filter(vpark=> vpark.id !== id)
      this.setState({visited: filteredVisitedParks})
    })
  }

  handleNewComment=(newComment)=>{
    this.setState({comments:[...this.state.comments, newComment]})
    console.log(this.state.comments)
  }

  render(){  
    // console.log(this.state.visited)
    return (
      <div className="App">
        <Navbar />
        <Switch>
        <Route path='/parks/:id' render={(routerProps)=><ParkPage {...routerProps} comments={this.state.comments}/>}/>
          <Route path='/users/:id' render={(routerProps)=> <UserPage visited={this.state.visited} removeVistedPark={this.removeVistedPark} handleNewComment={this.handleNewComment} comments={this.state.comments} {...routerProps}/>} />
          <Route path='/parks' render={(routerProps)=> <ParkIndex parks={this.state.parks} {...routerProps} handleNewUserPark={this.handleNewUserPark} comments={this.state.comments}/>} />
          {/* <Route path="/login" component={Auth}/> */}
          <Route exact path='/' render={()=> <Home />} />
        </Switch>
      </div>
    );
  }
}

export default App;
