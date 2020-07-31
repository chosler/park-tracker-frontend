import React from 'react';
import UserParkCard from './UserParkCard';


const UserPage = (props) => {
    // console.log(props)
    return (
    <div className="user-page">
        <UserParkCard userParks={props.visited} removeVisitedPark={props.removeVistedPark} comments={props.comments} handleNewComment={props.handleNewComment}/>
    </div>
    )
}

export default UserPage;