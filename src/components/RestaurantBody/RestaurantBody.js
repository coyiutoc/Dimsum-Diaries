import React, { Component } from "react";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import "./RestaurantBody.scss";

class RestaurantBody extends Component {
  
  constructor (props) {
    super(props);

    let nbData = props.data.find((elem) => {
      return elem.name === props.neighborhood;
    })
  
    let restoData = nbData.restaurants.find((elem) => {
      return elem.id === props.restaurant;
    })

    let numUserRatings = this.getUserRatingsOnStartUp(props.restaurant, restoData.numUserRatings);

    this.state = {
      neighborhood: props.neighborhood,
      restaurant: props.restaurant,
      data: props.data,
      restoData: restoData,
      numUserRatings: numUserRatings
    }
  }

  getUserRatingsOnStartUp(id, ratingsInData) {
    let storedRatings = JSON.parse(sessionStorage.getItem("numRatings"));

    // If there's a stored value, use it
    if (storedRatings && storedRatings[id]) {
      return storedRatings[id];
    } else {
      return ratingsInData;
    }
  }

  retrieveStars() {
    let rating = this.state.restoData.numStars;
    const MAX = 5;
    let string = "";
    let star = `<i class="fas fa-star fa-2x"></i>`;
    let no_star = `<i class="far fa-star fa-2x"></i>`;
  
    for (let i = 0; i < MAX; i++) {
      if (rating > 0) {
        string += star;
      } else {
        string += no_star;
      }
      rating -= 1;
    }

    return(
      <div>{ReactHtmlParser(string)}</div>
   )
  }

  incrementRating() {
    let newRatings = this.state.numUserRatings + 1;

    this.setState({
      numUserRatings: newRatings
    });

    // Handle session storage
    let id = this.state.restaurant;
    let allRatings = JSON.parse(sessionStorage.getItem("numRatings"));
    if (allRatings) {
      allRatings[id] = newRatings;
      sessionStorage.setItem("numRatings", JSON.stringify(allRatings));
    } else {
      var obj = {};
      obj[id] = newRatings;
      sessionStorage.setItem("numRatings", JSON.stringify(obj));
    }
  }

  render() {
    return (
      <div className = "restaurant-block">
        <img src={this.state.restoData.pgImg}></img>
        <div className="restaurant-header">
          <h1>{this.state.restoData.name}</h1> 
          <div className = "publish-date">PUBLISHED : {this.state.restoData.publishDate.toUpperCase()}</div>
          <hr></hr>
          <span>
            <div className = "stars">
              {this.retrieveStars()}
            </div>
            <div className = "userRating">
              <span>
                <i className="fas fa-thumbs-up fa-2x thumbs-up-icon"
                   onClick = {() => this.incrementRating()}></i>
                <div className="rating-bubble">{this.state.numUserRatings}</div>
              </span>
            </div>
          </span>
        </div>

        <div className = "text-body">
          {this.state.restoData.text}
        </div>
      </div>
    );
  }
}

export default RestaurantBody;
