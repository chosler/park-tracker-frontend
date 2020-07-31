import React from 'react';
import CommentForm from './CommentsForm';
import X from './x-square.svg';

const UserParkCard = props => {
    // console.log(props)
    
    return (
        <>
            {props.userParks.map(userPark=> 
                <div className="park-card" >
                    <img className="remove-button" src={X} onClick={() => props.removeVisitedPark(userPark.id)}/>
                    <h2 className="park-card-name">{userPark.attributes.park.name}</h2>
                    <h4 className="park-card-state">{userPark.attributes.park.state}</h4>
                    <img className="park-card-image" src={userPark.attributes.park.img_urls[0]} alt={userPark.attributes.park.name}/>
                    <ul className='usercard-comments'>{props.comments.filter(comment => comment.park_id === parseInt(userPark.attributes.park.id)).map(comment=> 
                        <li>{comment.comment_content}</li>)} 
                    </ul>
                    <CommentForm userId={userPark.attributes.user.id} parkId={userPark.attributes.park.id} handleNewComment={props.handleNewComment}/>
                
                </div>
            )}
        </>
    )
}

export default UserParkCard;
