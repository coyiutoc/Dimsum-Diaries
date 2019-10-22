import React from "react";
import "./LandingBlock.scss";

const LandingBlock = () => {
  return (
    <div className = "landing-container">
        <div className = "landing-block">
          <h1>A foodie's diary <br></br>for the best <br></br>dim sum spots in Vancouver, BC.</h1>
          <div className = "divider"></div>
          <p>I'm just the typical Asian looking for some good har gaw to warm my belly with.</p>
          <p>This is a collection of my go-to spots in my home-town, Vancouver! </p>
        </div>
        <div className = "landing-image"></div>
    </div>
  );
};

export default LandingBlock;