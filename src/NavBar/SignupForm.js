import React from 'react'

class SignupForm extends React.Component {

  state = {
    user_name: "",
    password: "",
    passwordConfirm: "",
    name: "",
    // profile_pic: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (e) => {
      e.preventDefault()
      if(this.state.password === this.state.passwordConfirm){
        fetch("http://localhost:3000/api/v1/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify({
                user_name: this.state.user_name, 
                name: this.state.name,
                // profile_pic: this.state.profile_pic,
                password: this.state.password
            })
          })
          .then(res => res.json())
          .then(response => {
            if(response.errors){
              alert(response.errors)
            } else { 
              this.props.setUser(response)
            }
        })
        } else {
      alert("Passwords don't match!")
    }
}

  render() {
    //   console.log(this.state)
    return (
        <div className='signup-page'>
             {/* <video autoPlay="autoplay" muted
      // loop="loop" 
      className='signup-video'>
             <source src={'https://firebasestorage.googleapis.com/v0/b/hello-1caa7.appspot.com/o/Sea%20-%2038971.mp4?alt=media&token=23a3940d-89f9-4658-a3cf-af5c3fc068a9'} type="video/mp4" />
            </video> */}
            <img className='signup-video' src='https://firebasestorage.googleapis.com/v0/b/hello-1caa7.appspot.com/o/ocean.png?alt=media&token=037d1891-43cb-4c6a-be61-44ac13361a6b'/>
            <div className="signup-container">
                <h2 class="sign-up-title">Sign Up</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="signup-form">
                        <input className="signup-input" name="user_name" value={this.state.username} onChange={this.handleChange} placeholder="username"/>
                        <input className="signup-input" name="password" value={this.state.password} type="password" onChange={this.handleChange} placeholder="password"/>
                        <input className="signup-input" name="passwordConfirm" value={this.state.passwordConfirm} type="password"  onChange={this.handleChange} placeholder="password confirmation"/>
                        <input className="signup-input" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Your Name"/>
                    </div>
                    <button className="signup-submit" type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    ) 
  }
}

export default SignupForm