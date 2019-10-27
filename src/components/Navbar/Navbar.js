import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import appRoutes from "../../AppRoutes";
import "./Navbar.scss";
import $ from "jquery";

const Navbar = () => {

  return (
    <div className = "w-80 pl-5 pr-5">
      <nav className="navbar navbar-custom top">
        <div className="d-md-flex d-block flex-row mx-md-auto">
            <div className="navbar-brand container" href="#">
              <Link
                to={`${appRoutes.home}`}
              >
                <div className="title left block">DIMSUM</div>
                <a className = "block" href="#">
                  <img width="50" src={Logo}></img>
                </a>
                <div className="title right block">DIARIES</div>
              </Link>
            </div>
        </div>
      </nav>

      <nav className="navbar navbar-custom bottom">
        <div className="d-md-flex d-block flex-row mx-md-auto">
          <div className = "container">
            <a className="block link left" href="/#Burnaby">BURNABY</a>
            <a className="block link" href="/#Downtown">DOWNTOWN</a>
            <a className="block link right" href="/#Richmond">RICHMOND</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;