import React from "react";
import "./Footer.scss";

const Footer = () => {

  return (
    <div className = "footer">
      <div>
        <h3>NEIGHBORHOOD</h3>
        <a href="/#Burnaby"><p>Burnaby</p></a>
        <a href="/#Downtown"><p>Downtown</p></a>
        <a href="/#Richmond"><p>Richmond</p></a>
      </div>
      <div>
        <h3>CONTACT ME</h3>
        <p>Caitlin Coyiuto</p>
        <p>604-813-XXX</p>
        <p>XXXXXX@gmail.com</p>
      </div>
      <div>
        <h3>SOCIAL MEDIA</h3>
        <p>Facebook</p>
        <p>Twitter</p>
        <p>Instagram</p>
      </div>
    </div>
  );
};

export default Footer;
