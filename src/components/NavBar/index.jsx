import { Link, NavLink } from "react-router-dom";
import MobileNavBar from "../MobileNavBar";
import { aviRobotsLogo } from "../../assets";

const NavBar = () => {
  return (
    <>
      <MobileNavBar />
      <nav className="navPc">
        <Link to="/">
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
      </nav>
    </>
  );
};

export default NavBar;
