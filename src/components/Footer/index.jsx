import React from "react";
import { Link, NavLink } from "react-router-dom";
import ApelieLOGO from "/assets/logo/ApelieLOGO.png";

const Footer = () => {
  return (
    <footer>
      <div className="mainContainer">
        <div className="leftContainer">
        <p>Avirobots by</p>
          <img src={ApelieLOGO} alt="Logo"></img>
          <Link to="/contact" className="button" onClick={() => window.scrollTo(0, 0)}>
            Suscribe
          </Link>
          <div>
            <p className="primaryText">Suscribe to our newsletter</p>
            <p className="secondaryText">
              Get product update, company news and more.
            </p>
          </div>
        </div>
        <div className="rightContainer">
          <a href="https://www.instagram.com/apelie.robotics/" target="_blank">
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/company/apelie-robotics/"
            target="_blank"
          >
            LinkedIn
          </a>
          <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Contact</Link>
          <a
            href="https://www.linkedin.com/company/apelie-robotics/jobs/"
            target="_blank"
          >
            Work with us
          </a>
        </div>
      </div>
      <div className="secondaryContainer">
        <p>Johns Creek, Georgia USA</p>
      </div>
    </footer>
  );
};

export default Footer;
