import React, { useRef } from 'react';
import { render } from '@testing-library/react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiY21zdGllIiwiYSI6ImNrZDR0bjFueTFjcGwydmw1Z3lzMmU3cjkifQ.5GFJJQm0SbrFXDj79VlpMA';

class ParkPage extends React.Component {

    mapRef = React.createRef()

    state= {
        currentPage: null,
        lng: 5,
        lat: 34,
        zoom: 2
    }
    componentDidMount(){
        fetch(`http://localhost:3000/api/v1/parks/${this.props.match.params.id}`)
        .then(resp=>resp.json())
        .then(currentPark=>{
            console.log(this.state.currentPage)
            this.setState({currentPage: currentPark})
        })
        const { lng, lat, zoom } = this.state;

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [lng, lat],
      zoom
    });

    map.on('move', () => {
      const { lng, lat } = map.getCenter();

      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
    }

    
    
    
    
    render(){ 
        const { lng, lat, zoom } = this.state;
       console.log(this.mapRef)

    //    const {name, state, img_url, activity, entrance_fee, operating_hours, description} = this.state.currentPage
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
              {/* <div ref={this.mapRef} className='mapContainer' id='map'/> */}
              </>
              ) 
              : ( <div>Loading..</div>)
          }
          <div>
            <div className='sidebarStyle'>
            <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
            </div>
            <div ref={el => this.mapContainer = el} className='mapContainer' />
            </div>
        </div>
    )}
}

export default ParkPage;