import React from 'react';
import UserParkCard from './UserParkCard';

const UserPage = (props) => {
    // console.log(props.visited)
    return (
    <div className="user-page">
        <UserParkCard userParks={props.visited} removeVisitedPark={props.removeVistedPark} comments={props.comments}/>
    </div>
    )
}

export default UserPage;