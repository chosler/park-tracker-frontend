import React from 'react';
import CommentForm from './CommentsForm';

const UserParkCard = props => {
    // console.log(props.userParks)
    
    return (
        <>
            {props.userParks.map(userPark=> 
                <div className="park-card" >
                <h2>{userPark.attributes.park.name}</h2>
                <h4>{userPark.attributes.park.state}</h4>
                <img src={userPark.attributes.park.img_urls[0]} alt={userPark.attributes.park.name} className="park-image"/>
                <ul className='comments'>{props.comments.filter(comment => comment.park_id === parseInt(userPark.attributes.park.id)).map(comment=> 
                    <li>{comment.comment_content}</li>)} 
                </ul>
                <CommentForm userId={userPark.attributes.user.id} parkId={userPark.attributes.park.id}/>
                <button onClick={() => props.removeVisitedPark(userPark.id)}>Remove Visited Park</button>
                </div>
            )}
        </>
    )
}

export default UserParkCard;
