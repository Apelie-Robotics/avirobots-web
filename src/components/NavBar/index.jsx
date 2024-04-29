import { Link, NavLink } from "react-router-dom";
import MobileNavBar from "../MobileNavBar";
import avisenseLOGO from "../../assets/logo/avisenseLOGO.png";

const NavBar = () => {
  return (
    <>
      <MobileNavBar />
      <nav className="nav">
        <Link to="/" className="nav__Logo">
          <img src={avisenseLOGO} alt="Logo" />
        </Link>
        <div className="nav__LinkContainer">
          <NavLink to="/us" className="nav__Link">
            Team
          </NavLink>
          <NavLink to="/contact" className="nav__Link">
            Contact
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
