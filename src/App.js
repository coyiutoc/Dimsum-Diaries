import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from "./components/Navbar/Navbar";
import LandingBlock from "./components/LandingBlock/LandingBlock";
import Neighborhood from "./components/Neighborhood/Neighborhood";
import Footer from "./components/Footer/Footer";

import Data from "./data.js";

function App() {
  return (
    <div>
      <NavBar />
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
      <Footer />
    </div>
  );
}

export default App;
