import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import flats from '../../data/flats';
import FlatList from './flat_list';
import Marker from './marker'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats,
      clickedFlat: flats[0]
    };
    console.log(this.state.clickedFlat)
  }

  center() {
    return {
      lat: this.state.clickedFlat.lat,
      lng: this.state.clickedFlat.lng
    };
  }

  clickFlat = (index) => {
    this.setState({ clickedFlat: flats[index]})
  }

  render() {
    return (
      <div>
        < FlatList flats={this.state.flats} clickedFlat={this.state.clickedFlat} clickFlat={this.clickFlat} />
        <div className="map-container">
          <GoogleMapReact defaultCenter={this.center()} defaultZoom={12}>
            <Marker
              lat={this.state.clickedFlat.lat}
              lng={this.state.clickedFlat.lng}
            />
          </GoogleMapReact>
        </div>
      </div>
    )
  }
}

export default App;
