import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import avisenseLOGO from "/assets/logo/LOGOS-01.png";
import ApelieISOLOGO from "/assets/logo/apelieISOLOGO.png";

const MobileNavBar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const clickToggler = () => setMenuToggle(!menuToggle);

  return (
    <nav className="mobileNav">
      <button
        onClick={clickToggler}
        className="mobileMenu__Button mobileMenu__Button--Open"
      >
        <AiOutlineMenu />
      </button>
      <Link to="/" className="mobileNav__Logo">
        <img src={avisenseLOGO} alt="Logo"></img>
        {/* <span>
          <i>by Apelie Robotics</i>
        </span> */}
      </Link>
      <div className={`mobileMenu ${menuToggle ? "" : "mobileMenu--closed"}`}>
        <div className="mobileMenu__LinkContainer">
          <button
            onClick={clickToggler}
            className="mobileMenu__Button mobileMenu__Button--Close"
          >
            <AiOutlineClose />
          </button>

          <Link to="/" className="mobileMenu__Link" onClick={clickToggler}>
            Home
          </Link>
          <Link
            to="/#solution"
            className="mobileMenu__Link"
            onClick={clickToggler}
          >
            Our solution
          </Link>
          <Link to="/us" className="mobileMenu__Link" onClick={clickToggler}>
            About us
          </Link>
          <Link
            to="/contact"
            className="mobileMenu__Link"
            onClick={clickToggler}
          >
            Contact us
          </Link>
          <Link
            to="/#trial"
            className="mobileMenu__Link mobileMenu__Link--Highlight"
            onClick={clickToggler}
          >
            Book a trial!
          </Link>
        </div>
        <div className="mobileMenu__Bottom">
          <span className="mobileMenu__BottomText">
            Johns Creek, Georgia USA
          </span>
          <img
            src={ApelieISOLOGO}
            alt="Logo"
            className="mobileMenu__BottomLogo"
          ></img>
        </div>
      </div>
      {menuToggle && <div className="menuMask" onClick={clickToggler} />}
    </nav>
  );
};

export default MobileNavBar;
