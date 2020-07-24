import React from 'react';
import ParkCard from './ParkCard';

const ParkIndex = props => {
    return (
        <div className="park-index">
          {props.parks.map (park=><ParkCard key={park.id} {...park}/>)}
        </div>
    )
}

export default ParkIndex;