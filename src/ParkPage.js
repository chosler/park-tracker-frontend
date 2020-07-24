import React from 'react';
import { render } from '@testing-library/react';

class ParkPage extends React.Component {
    state= {
        currentPage: null
    }
    componentDidMount(){
        fetch(`http://localhost:3000/api/v1/parks/${this.props.match.params.id}`)
        .then(resp=>resp.json())
        .then(currentPark=>{
            console.log(this.state.currentPage)
            this.setState({currentPage: currentPark})})
    }
    

   render(){ 
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
              </>
              ) 
              : ( <div>Loading..</div>)
          }
        </div>
    )}
}

export default ParkPage;