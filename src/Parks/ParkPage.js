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
        <>
          {this.state.currentPage ? (
              <div className="park-page">
                <img className="park-page-image" src={this.state.currentPage.img_urls[0]} alt={this.state.currentPage.name}/>
                <h1 className='park-page-name'>{this.state.currentPage.name}</h1>
                <h4 className='park-page-state'>{this.state.currentPage.state}</h4>
                <p className='park-page-description'>{this.state.currentPage.description}</p>
                <p className='park-page-fee'>Entrance Fee: ${this.state.currentPage.entrance_fee}</p>
                <p className='park-page-hours'>Operating Hours: {this.state.currentPage.operating_hours}</p>
                <p className='park-page-activities'>Activities: {this.state.currentPage.activity}</p>
                <h4 className='park-page-comments'>Comments:</h4>
                <ul className='park-page-comments-list'>{filteredComments.map(comment=> 
                  <li>{comment.comment_content}</li>)} 
                </ul>
                <WeatherData lat={this.state.lat} lng={this.state.lng} name={this.state.currentPage.name}/>
              </div>
              ) 
              : ( <div>Loading..</div>)
          }
          <div>
            <div className='mapBox' ref={el => this.mapContainer = el} />
          </div>
        </>
    )}
}

export default ParkPage;