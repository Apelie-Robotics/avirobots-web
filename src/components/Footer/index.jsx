import { apelieLogo } from "../../assets";

const Footer = () => {
  return (
    <footer>
      <div className="mainContainer">
        <div className="leftContainer">
          <img src={apelieLogo} alt="Apelie Robotics logo" />
          <div>
            <a>Suscribe to our newsletter</a>
            <p>Get product updates, company news, and more.</p>
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
        </div>
      </div>
      <div className="secondaryContainer">
        <p>Johns Creek, Georgia, USA</p>
      </div>
    </footer>
  );
};

export default Footer;
