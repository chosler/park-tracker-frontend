import React from 'react';

class ParkCard extends React.Component {
  
  handleAdd = e => {
    
    // this.props.visited.map(userPark => {
    //     if(userPark.attributes.park.id === this.props.id && userPark.attributes.user.id === this.props.userId)
    //     {
    //       alert("This park is already on your list!")
    //     }
    //     else{
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
              })
              )
            }
          // })
          // }
 

  render(){
    console.log(this.props.visited);
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
