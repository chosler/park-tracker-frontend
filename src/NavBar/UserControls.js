import React from 'react'
import { Link } from 'react-router-dom'
import login from './log-in.svg';
import logout from './log-out.svg';
import userplus from './user-plus.svg';

const UserControls=(props)=>{
  return (
    <div className="user-controls">
        {props.currentUser ? 
        (<>
        <div>Welcome {props.currentUser.user_name}</div>
        <img src={logout} onClick={props.logout}/>
        {/* <button onClick={props.logout}>Logout</button> */}
        </>) :
        (<>
        {/* <Link to="/login"><button className="login">LOGIN</button></Link> */}
        <Link to="/login" className='login'><img src={login}/></Link>
        <Link to="/signup"className='signup'><img src={userplus}/></Link>
        </>) }
    </div>
  )
}

export default UserControls