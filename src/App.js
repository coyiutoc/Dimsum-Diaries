import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from "./components/Navbar/Navbar";
import LandingBlock from "./components/LandingBlock/LandingBlock";

function App() {
  return (
    <div>
      <NavBar />
      <LandingBlock />
    </div>
  );
}

export default App;
