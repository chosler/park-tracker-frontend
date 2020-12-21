import React from 'react';
import Plus from './plus-square.svg';
import Info from './info.svg';

class ParkCard extends React.Component {
  
  handleAdd = e => {
    fetch('http://localhost:3000/api/v1/user_parks',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user_id: this.props.userId,
        park_id: this.props.id
      })
    })
    .then(resp=>resp.json()
    .then(data=>{
      this.props.handleNewUserPark(data)
      alert('Park successfully added!')
      this.newPark=data
    })
    )
  }

 

  render(){
    const {name, state, img_urls, id, push} = this.props
    return (
        <div className="park-card">
          <img src={Info} onClick={()=> push(`/parks/${id}`)}/>
           <img src={Plus} className="add-button" onClick={this.handleAdd}/>
          <h2 className="park-card-name">{name.toUpperCase()}</h2>
          <h4 className="park-card-state">{state}</h4>
          <img className="park-card-image" src={img_urls[0]} alt={name}/>
          <p className='comment-dec'>Visitor Comments:</p>
          <ul className='card-comments'>{this.props.comments.filter(comment => comment.park_id === parseInt(id)).map(comment=> 
            <li>{comment.comment_content}</li>)} 
          </ul>
        </div>
    )
  }
}
export default ParkCard;
