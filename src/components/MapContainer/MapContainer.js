import React from "react";
import GoogleMap from "./GoogleMap/GoogleMap";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

import "./MapContainer.scss";

const MapContainer = (props) => {

  let nbData = props.data.find((elem) => {
    return elem.name === props.neighborhood;
  })

  let restoData = nbData.restaurants.find((elem) => {
    return elem.id === props.restaurant;
  })

  return (
    <div className="map-container">
      <div className="address">
        <h3>{restoData.name}</h3>
        <br></br>
        {ReactHtmlParser(restoData.address)}
      </div>
      <div>
        <GoogleMap 
          coordinates={restoData.coordinates}
          zoom={restoData.zoom}
        />
      </div>
    </div>
  );
};

export default MapContainer;