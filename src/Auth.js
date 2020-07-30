
// import React from 'react';

// class Auth extends React.Component {
//     state = {
//         isNewUser: false,
//         username: '',
//         password: '',
//         confirmation: '',
//         name: '',

//     }

//     toggleNewUser = () => this.setState(prevState => ({ isNewUser: !prevState.isNewUser, username: '', password: '', name: '', confirmation: '' }))

//     handleChange = e => this.setState({ [e.target.name]: e.target.value })

//     handleSubmit = e => {
//         const { isNewUser, password, confirmation, username } = this.state;
//         isNewUser 
//             ? password === confirmation ? this.props.history.push('/parks') : alert('try again!')
//             : this.props.history.push('/parks')
//     }

//     renderLogin = () => {
//         const { username, password } = this.state;
//         return (
//             <>
//                 <input name="username" placeholder="Username" value={username} onChange={this.handleChange}/>
//                 <input name="password" placeholder="Password" type="password" value={password} onChange={this.handleChange}/>
//             </>
//         )
//     }

//     renderSignup = () => {
//         const { username, password, name, confirmation } = this.state;
//         return (
//             <>
//                 <input name="name" placeholder="Name" value={name} onChange={this.handleChange}/>
//                 <input name="username" placeholder="Username" value={username} onChange={this.handleChange}/>
//                 <input name="password" placeholder="Password" type="password" value={password} onChange={this.handleChange}/>
//                 <input name="confirmation" placeholder="Confirm Password"  type="password" value={confirmation} onChange={this.handleChange}/>
//             </>
//         )
//     }
    
//     render(){
//         let { isNewUser } = this.state;
//         console.log('IN AUTH', this.props.history) // routerProps are POWERFUL!!!
//         return (
//             <div className="simple-flex-col">
//                 <h3>{isNewUser ? 'Sign Up' : 'Login'}</h3>
//                 { isNewUser ? this.renderSignup() : this.renderLogin() }
//                 <button type="submit" onClick={this.handleSubmit}>Submit</button>
//                 <br></br>
//                 <br></br>
//                 <button onClick={this.toggleNewUser}>{isNewUser ? "Login Instead" : "Sign Up Instead"}</button>
//             </div>
//         )
//     }
// }

// export default Auth;