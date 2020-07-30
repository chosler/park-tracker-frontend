import React from 'react'
import { Link } from 'react-router-dom'

const UserControls=(props)=>{
  return (
    <div className="user-controls">
        {props.currentUser ? 
        (<>
        <div>Welcome {props.currentUser.user_name}</div>
        <button onClick={props.logout}>Logout</button>
        </>) :
        (<>
        <Link to="/login"><button className="login">LOG IN</button></Link>
        <Link to="/signup"><button className="signup">SIGN UP</button></Link>
        </>) }
    </div>
  )
}

export default UserControls