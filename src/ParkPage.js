import React, { useRef } from 'react';
import mapboxgl from 'mapbox-gl';
// import React from 'react';
// import { render } from '@testing-library/react';
// import { render } from '@testing-library/react';
import WeatherData from './WeatherData'

mapboxgl.accessToken = 'pk.eyJ1IjoiY21zdGllIiwiYSI6ImNrZDR0bjFueTFjcGwydmw1Z3lzMmU3cjkifQ.5GFJJQm0SbrFXDj79VlpMA';


class ParkPage extends React.Component {
    state= {
        currentPage: null,
        lng: 5,
        lat: 34,
        zoom: 9
    }

    componentDidMount(){
        fetch(`http://localhost:3000/api/v1/parks/${this.props.match.params.id}`)
        .then(resp=>resp.json())
        .then(currentPark=>{

            this.setState({currentPage: currentPark,
                lng: currentPark.long,
                lat: currentPark.lat,
                mapIsLoaded: true
               })
        })
      const { lng, lat, zoom } = this.state;
      
      const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/outdoors-v11',
      center: [lng, lat],
      zoom });
      
      var marker = new mapboxgl.Marker()
      .setLngLat([lng, lat])
      .addTo(map);

      this.map = map
      this.marker=marker
    }

    
  componentDidUpdate(){
    if (!this.state.mapIsLoaded) {
        return;
      } else {
    this.map.flyTo({
        center: [
            this.state.lng,
        this.state.lat
        ],
        essential: true 
        })
    this.marker.setLngLat([this.state.lng, this.state.lat])
    this.marker.setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
    .setHTML('<h3>' + this.state.currentPage.name + '</h3><p>' + `Lat: ` + this.state.lat  + ', Long: ' + this.state.lng + '</p>'))
      }
   }
  
   render(){ 
    let filteredComments = this.props.comments.filter(comment => comment.park_id === parseInt(this.props.match.params.id))

    // console.log(this.map)
       return (
        <div className="park-page">
          {this.state.currentPage ? (
              <>
              <h1>{this.state.currentPage.name}</h1>
              <h4>{this.state.currentPage.state}</h4>
              <img src={this.state.currentPage.img_urls[0]} alt={this.state.currentPage.name} className="park-image"/>
              <p>Activities: {this.state.currentPage.activity}</p>
              <p>Entrance Fee: ${this.state.currentPage.entrance_fee}</p>
              <p>Operating Hours: {this.state.currentPage.operating_hours}</p>
              <p>{this.state.currentPage.description}</p>
                <WeatherData lat={this.state.lat} lng={this.state.lng} name={this.state.currentPage.name}/>
        
              <ul className='comments'>{filteredComments.map(comment=> 
                <li>{comment.comment_content}</li>)} 
             </ul>
              </>
              ) 
              : ( <div>Loading..</div>)
          }
          <div>
            <div ref={el => this.mapContainer = el} className='mapContainer' />
            </div>
        </div>
    )}
}

export default ParkPage;