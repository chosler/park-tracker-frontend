import React from 'react';
import ParkCard from './ParkCard';

const ParkIndex = props => {
    // console.log(props)
    return (
        <div className="park-index">
          {props.parks.map (park=><ParkCard key={park.id} {...park} push={props.history.push}/>)}
        </div>
    )
}

export default ParkIndex;