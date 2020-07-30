import React from 'react';
import ParkCard from './ParkCard';
import MapView from './MapView';

class ParkIndex extends React.Component {  
  state={
    mapDisplay: false 
  }

  toggleDisplay = () => {
    this.setState({mapDisplay: !this.state.mapDisplay})
  }

  renderCard = () => {
   return(
     <>
    {this.props.parks.map (park=><ParkCard key={park.id} {...park} push={this.props.history.push} handleNewUserPark={this.props.handleNewUserPark} comments={this.props.comments}/>)}
    </>
   )
  }

  renderMap = () => {
    return(
      <MapView parks={this.props.parks} />
    )
  }

  render(){
    return (
      <div className="park-index">
        <button className='mapview-button' onClick={this.toggleDisplay}>{this.state.mapDisplay ? 'Card View' : 'Map View'}</button>
        {this.state.mapDisplay ? this.renderMap() : this.renderCard()}
      </div>
  )
  }
}

export default ParkIndex;