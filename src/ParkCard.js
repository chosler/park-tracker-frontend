import React from 'react';

class ParkCard extends React.Component {
  
  handleAdd = e => {
    fetch('http://localhost:3000/api/v1/user_parks',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user_id: 1,
        park_id: this.props.id
      })
    })
    .then(resp=>resp.json()
    .then(data=>{
      this.props.handleNewUserPark(data)
    }))
  }

  render(){
    const {name, state, img_urls, id, push} = this.props
    return (
        <div className="park-card">
          <h2>{name}</h2>
          <h4>{state}</h4>
          <img src={img_urls[0]} alt={name} className="park-card-image"/>
          <ul className='comments'>{this.props.comments.filter(comment => comment.park_id === parseInt(id)).map(comment=> 
            <li>{comment.comment_content}</li>)} 
          </ul>
          <button onClick={()=> push(`/parks/${id}`)}>More Info</button>
          <button onClick={this.handleAdd}>+</button>
          <br></br>
        </div>
    )
  }
}
export default ParkCard;
