import React from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.REACT_APP_MAP_API_KEY;

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
            <div className='map-view' ref={el => this.mapContainer = el} />
        </>
    )
  }
}
export default MapView;
