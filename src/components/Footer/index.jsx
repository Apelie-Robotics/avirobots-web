import ApelieLOGO from "/assets/logo/ApelieLOGO.png";

const Footer = () => {
  return (
    <footer>
      <div className="mainContainer">
        <div className="leftContainer">
          <img src={ApelieLOGO} alt="Logo"></img>
          <a href="/contact" className="button">
            Suscribe
          </a>
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
          <a href="/contact">Contact</a>
          <a
            href="https://www.linkedin.com/company/apelie-robotics/jobs/"
            target="_blank"
          >
            Work with us
          </a>
        </div>
      </div>
      <div className="secondaryContainer">
        <p>Av. La Voz del Interior 7000 - Córdoba, Argentina</p>
      </div>
    </footer>
  );
};

export default Footer;
