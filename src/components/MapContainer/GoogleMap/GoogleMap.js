import React, { Component } from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class GoogleMap extends Component {

  render() {
    const mapStyles = {
      width: '58vw',
      height: '50vh',
    };

    return (
      <Map
          google={this.props.google}
          zoom={this.props.zoom}
          style={mapStyles}
          initialCenter={this.props.coordinates}
        >
          <Marker position={this.props.coordinates}
                  />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyAOHQdxiFUf4siXj0yuqX6Q6wdB2q-D4AQ")
})(GoogleMap)