import React from 'react';

const ParkCard = props => {
  const {name, state, activity, entrance_fee, img_url, operating_hours, description} = props
    return (
        <div className="park-card">
          <h2>{name}</h2>
          <h4>{state}</h4>
          <img src={img_url} alt={name} className="park-image"/>
          <p>Activities: {activity}</p>
          <p>Entrance Fee: ${entrance_fee}</p>
          <p>Operating Hours: {operating_hours}</p>
          <p>{description}</p>
          <br></br>
        </div>
    )
}

export default ParkCard;