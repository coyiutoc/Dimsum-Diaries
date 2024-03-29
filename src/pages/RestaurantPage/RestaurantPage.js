import React from 'react';
import { useParams } from "react-router";
import RestaurantBody from "../../components/RestaurantBody/RestaurantBody";
import MapContainer from "../../components/MapContainer/MapContainer";
import Data from "../../data";

const RestaurantPage = () => {

  let {neighborhood, restaurant} = useParams();

  return (
    <div>
      <RestaurantBody 
        neighborhood = {neighborhood}
        restaurant = {restaurant}
        data = {Data}/>
      <MapContainer 
        neighborhood = {neighborhood}
        restaurant = {restaurant}
        data = {Data}/>
    </div>
  );
}

export default RestaurantPage;
