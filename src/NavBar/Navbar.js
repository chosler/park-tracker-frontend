import React from 'react';
import { Link } from 'react-router-dom';
import UserControls from './UserControls'

const Navbar = props => {
    return (
        <div className="navbar">
            <Link to="/" className='nav-menu'>Home</Link>
            <Link to="/parks" className='nav-menu'>Parks</Link>
            <Link to="/users/:id" className='nav-menu'>My Parks</Link>
            <UserControls logout={props.logout} currentUser={props.currentUser} />
        </div>
    )
}

export default Navbar;