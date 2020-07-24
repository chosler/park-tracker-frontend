import React from 'react';

const ParkCard = props => {
  const {name, state, activity, entrance_fee, img_urls, operating_hours, description, id, push} = props
  console.log(props)
    return (
        <div className="park-card" onClick={()=> push(`/parks/${id}`)}>
          <h2>{name}</h2>
          <h4>{state}</h4>
          <img src={img_urls[0]} alt={name} className="park-card-image"/>
          <br></br>
        </div>
    )
}

export default ParkCard;