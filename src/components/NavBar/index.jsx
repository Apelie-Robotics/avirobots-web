import { Link, NavLink } from "react-router-dom";
import MobileNavBar from "../MobileNavBar";
import avisenseLOGO from "/assets/logo/LOGOS-01.png";

const NavBar = () => {
  return (
    <>
      <MobileNavBar />
      <nav className="nav">
        <Link to="/" className="nav__Logo">
          <img src={avisenseLOGO} alt="Logo" />
          
        </Link>
        <div className="nav__LinkContainer">
          <NavLink to="/" className="nav__Link">
            Home
          </NavLink>
          <NavLink to="/us" className="nav__Link">
            About us
          </NavLink>
          <NavLink to="/contact" className="nav__Link">
            Contact us
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
