import React from 'react';

import LandingBlock from "../../components/LandingBlock/LandingBlock";
import Neighborhood from "../../components/Neighborhood/Neighborhood";

import Data from "../../data";

const HomePage = () => {
  return (
    <div>
      <LandingBlock />
      {Data.map((neighborhood, idx) => {
        return (
          <Neighborhood
            id={neighborhood.name}
            key={neighborhood.name}
            data={Data}
          />
        );
      })}
    </div>
  );
}

export default HomePage;
