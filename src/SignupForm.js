import React from 'react'

class SignupForm extends React.Component {

  state = {
    user_name: "",
    password: "",
    passwordConfirm: "",
    name: "",
    profile_pic: ""
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
                profile_pic: this.state.profile_pic,
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
      <div className="center-form">
        <form className="auth-form" onSubmit={this.handleSubmit}>
          <input name="user_name" value={this.state.username} onChange={this.handleChange} placeholder="username"/>
          <input name="password" value={this.state.password} type="password" onChange={this.handleChange} placeholder="password"/>
          <input name="passwordConfirm" value={this.state.passwordConfirm} type="password"  onChange={this.handleChange}placeholder="password confirmation"/>
          <input name="name" value={this.state.name} onChange={this.handleChange} placeholder="Your Name"/>
          <input name="profile_pic" value={this.state.profile_pic} onChange={this.handleChange} placeholder="add link to your profile picture"/>
          <button className="login" type="submit">Sign Up</button>
        </form>
      </div>
    ) 
  }
}

export default SignupForm