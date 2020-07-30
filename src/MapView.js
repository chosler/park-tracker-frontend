import React from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiY21zdGllIiwiYSI6ImNrZDR0bjFueTFjcGwydmw1Z3lzMmU3cjkifQ.5GFJJQm0SbrFXDj79VlpMA';

class MapView extends React.Component {

    state = {
        markers: []
    };

    componentDidMount() {
        const map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-105, 45],
        zoom: 2.5
        });

        this.map = map
        this.displayMarkers()
    }

    displayMarkers=()=>{
        const marker = this.props.parks.map(park=> 
            new mapboxgl.Marker()
            .setLngLat([park.long, park.lat])
            .setPopup(new mapboxgl.Popup({ offset: 25 })
                .setHTML(`<a href='http://localhost:3001/parks/${park.id}'>` + park.name +'</a>'))
            .addTo(this.map)
        )
    }

  render(){
    // this.displayMarkers()
    return (
        <> 
            <div ref={el => this.mapContainer = el} className='map-view' />
        </>
    )
  }
}
export default MapView;
