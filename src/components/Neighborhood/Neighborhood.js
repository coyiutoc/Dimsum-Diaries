import React from "react";
import { Link } from "react-router-dom";
import appRoutes from "../../AppRoutes";

import "./Neighborhood.scss";

const Neighborhood = (props) => {

  const name = props.id;
  const Data = props.data;
  let restaurants = null;

  for (let neighborhood of Data) {
    if (neighborhood.name === name) {
      restaurants = neighborhood.restaurants;
      break;
    }
  }

  return (
    <div id={name} className = "neighborhood-block">
      <div className = "neighborhood-name"><h2>{name.toUpperCase()}</h2></div>
      <div></div>
      <div></div>
      {
        restaurants.map((restaurant, idx) => {
          return (
            <div className = "browse-item" key = {restaurant.id}>
              <img src = {restaurant.img}
              />
              <div className = "content">
              <h2>{restaurant.name}</h2>
              <p>{restaurant.tagLine}</p>
              <span>
                <Link
                to={`${appRoutes.restaurant}/${name}/${restaurant.id}`}
                >
                  <button className="read-more" href="#">READ MORE</button>
                </Link>
              </span>
              </div>
            </div>
          );
        })
      }

    </div>
  );
};

export default Neighborhood;