import React from 'react';
import './App.css';
import './NavBar/navbar.css';
import './Parks/park.css';
import {Route, Switch} from 'react-router-dom';
import Navbar from './NavBar/Navbar';
import Home from './Home';
import ParkIndex from './Parks/ParkIndex';
import ParkPage from './Parks/ParkPage';
import UserPage from './User/UserPage';
import LoginForm from './NavBar/LoginForm';
import SignupForm from './NavBar/SignupForm';

class App extends React.Component {
  state={
    parks: [],
    visited: [],
    userId: null,
    comments: [],
    currentUser: null,
    searchTerm: '',
    searchBy: 'By Name'
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
    // console.log(this.state.comments)
  }

  setUser = (response) => {
    this.setState({
      currentUser: response.user,
      userId: response.user.id
    }, () => {
      localStorage.token = response.token
      this.props.history.push("/parks")
    })
    Promise.all([fetch(`http://localhost:3000/api/v1/user_parks`), fetch(`http://localhost:3000/api/v1/comments`)])
    .then(([res1, res2]) => {
      return Promise.all([res1.json(), res2.json()])
    })
    .then(([res1, res2]) => {
      {let matched = res1.data.filter(re1 => re1.attributes.user.id === this.state.userId)
        this.setState({visited: matched})}
      this.setState({comments: res2})
    })
  }

  logout = () => {
    this.setState({
      currentUser: null
    }, () => {
      localStorage.removeItem("token")
      this.props.history.push("/login")
    })
  }

  handleSearchChange = (event) => {
    this.setState({
     searchTerm: event.target.value
    })
   }

   toggleSearchType = (e) => {
     this.setState({
       searchBy: e.target.value
     })
   }

  render(){  

    // console.log(this.state.visited)

    return (
      <div className="App">
        <Navbar currentUser={this.state.currentUser} logout={this.logout}/>
        <Switch>
          <Route path='/parks/:id' render={(routerProps)=><ParkPage {...routerProps} comments={this.state.comments}/>}/>
          <Route path='/users/:userId' render={(routerProps)=> <UserPage visited={this.state.visited} removeVistedPark={this.removeVistedPark} handleNewComment={this.handleNewComment} comments={this.state.comments} {...routerProps}/>} />
          <Route path='/parks' render={(routerProps)=> <ParkIndex parks={this.state.parks} {...routerProps} handleNewUserPark={this.handleNewUserPark} comments={this.state.comments} searchTerm={this.state.searchTerm} handleSearchChange={this.handleSearchChange} toggleSearchType={this.toggleSearchType} searchBy={this.state.searchBy} userId={this.state.userId} visited={this.state.visited}/>} />
          <Route path="/login" render={() => <LoginForm  setUser={this.setUser}/>}/>
          <Route path="/signup" render={() => <SignupForm setUser={this.setUser}/>}/>
          <Route exact path='/' render={()=> <Home />} />
        </Switch>
      </div>
    );
  }
}

export default App;
