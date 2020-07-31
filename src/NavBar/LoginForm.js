import React from 'react'

class LoginForm extends React.Component {
  state = {
    user_name: "",
    password: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    

    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json" 
      },
      body: JSON.stringify({
          user_name: this.state.user_name, 
          password: this.state.password})
    })
    .then(res => res.json())
    .then(response => {
      if (response.errors){
        alert(response.errors)
      } else {
        this.props.setUser(response)
      }
    })

  }

  render(){
    return (
        <div className='login-page'>
            <video autoPlay="autoplay" muted
      // loop="loop" 
      className='login-video'>
             <source src={'https://firebasestorage.googleapis.com/v0/b/hello-1caa7.appspot.com/o/camphaledronefall18_ryx9sww7l__D4k.mp4?alt=media&token=22bf9a46-99cc-4d2d-a60d-e6063623f5d7'} type="video/mp4" />
            </video>
            {/* <img className='login-video' src='https://firebasestorage.googleapis.com/v0/b/hello-1caa7.appspot.com/o/Screen%20Shot%202020-07-30%20at%2010.36.27%20PM.png?alt=media&token=f3d1303f-508e-476f-8465-7fe848e3dadb'/> */}
            <div className="login-container">
                <h2 class="sign-in-title">SIGN IN</h2>

                <form onSubmit={this.handleSubmit}>
                    <div className="signin-form" >
                        <input className="signin-input" name="user_name" value={this.state.user_name} onChange={this.handleChange}placeholder="username"/>
                        <input className="signin-input" name="password" value={this.state.password} type="password"  onChange={this.handleChange}placeholder="password"/>
                    </div>
                    <button className="login-submit" type="submit">Log In</button>
                </form>
            </div>
        </div>
    )
  }
  
}

export default LoginForm