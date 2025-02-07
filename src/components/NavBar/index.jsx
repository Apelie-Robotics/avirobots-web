import { Link, NavLink } from "react-router-dom";
import MobileNavBar from "../MobileNavBar";
import { aviRobotsLogo, getTshirt1 } from "../../assets";

const NavBar = () => {
  return (
    <>
      <MobileNavBar />
      <nav className="navPc">
        <Link to="/" className="logo">
          <img src={aviRobotsLogo} alt="AviRobots logo" />
        </Link>
        <div className="linkContainer">
          <a href="/#trial" className="trialLink">
            Book a trial!
          </a>
          <NavLink to="/">Home</NavLink>
          <a href="/#solution">Solution</a>
          <NavLink to="/us">About us</NavLink>
          <NavLink to="/contact">Contact us</NavLink>
        </div>
        <a href="/#tshirt" className="getTshirt">
          <img
            src={getTshirt1}
            alt="Get your free Avirobots t-shirt"
            className="getTshirt"
          />
        </a>
      </nav>
    </>
  );
};

export default NavBar;
