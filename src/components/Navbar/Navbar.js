import React from "react";
import Logo from "../../assets/Logo.png";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className = "fixed-top w-80 pl-5 pr-5">
      <nav className="navbar navbar-custom top">
        <div className="d-md-flex d-block flex-row mx-md-auto">
            <div className="navbar-brand container" href="#">
              <div className="title left block">DIMSUM</div>
              <a className = "block" href="#">
                <img width="50" src={Logo}></img>
              </a>
              <div className="title right block">DIARIES</div>
            </div>
        </div>
      </nav>

      <nav className="navbar navbar-custom bottom">
        <div className="d-md-flex d-block flex-row mx-md-auto">
          <div className = "container">
            <a className="block link left" href="#">RESTAURANTS</a>
            <a className="block link" href="#">ABOUT</a>
            <a className="block link right" href="#">NEIGHBORHOODS</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;