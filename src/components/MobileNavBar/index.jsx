import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { apelieIsologo, aviRobotsLogo } from "../../assets";

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
        <img src={aviRobotsLogo} alt="Logo"></img>
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
          <a
            href="/#solution"
            className="mobileMenu__Link"
            onClick={clickToggler}
          >
            Our solution
          </a>
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
          <a
            href="/#trial"
            className="mobileMenu__Link mobileMenu__Link--Highlight"
            onClick={clickToggler}
          >
            Book a trial!
          </a>
        </div>
        <div className="mobileMenu__Bottom">
          <span className="mobileMenu__BottomText">
            Johns Creek, Georgia USA
          </span>
          <img
            src={apelieIsologo}
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
