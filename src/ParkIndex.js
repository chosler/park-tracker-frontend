import React from 'react';
import ParkCard from './ParkCard';

const ParkIndex = props => {  
    return (
        <div className="park-index">
          {props.parks.map (park=><ParkCard key={park.id} {...park} push={props.history.push} handleNewUserPark={props.handleNewUserPark} comments={props.comments}/>)}
        </div>
    )
}

export default ParkIndex;