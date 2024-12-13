import teamPhoto from "/assets/picture/teamPhoto.jpg";
import apelieLogo from "/assets/logo/ApelieISOLOGOWHITE.png";
import boardPhoto from "/assets/picture/boardPhoto.png";
import aboutUs1 from "/assets/picture/aboutUs1.png";
import aboutUs2 from "/assets/picture/aboutUs2.jpg";
import aboutUs3 from "/assets/picture/aboutUs3.jpg";
import aboutUs4 from "/assets/picture/aboutUs4.jpg";

const AboutUs = () => {
  return (
    <div className="aboutUs">
      <h1>Who are we?</h1>
      <div className="teamPhotoContainer">
        <img src={teamPhoto} alt="Team photo" className="teamPhoto" />
      </div>
      <div className="section1">
        <p className="firstp">
          Robotics will have a positive impact on the poultry sector, and we are committed to
          improving the lives of producers, animals, and consumers.<br />
          <b>
            We live in the era of precision agriculture, where technology boosts yields, respects animal
            welfare, and optimizes resources.
          </b>
          .
        </p>
        <p className="secondp">
          <b>Our robots increase productivity, enhance biosecurity by reducing the risk of
            cross-contamination, and address the growing labor shortage in production, ensuring
            continuity and sustainability.</b>
        </p>
        <p className="weAre">
          <i>Avirobots is a spinoff of Appelie Robotics dedicated to implementing robots in broiler and
            layer farming.</i>
        </p>
      </div>
      <div className="section2">
        <p>
          <i>Want to learn more about us, our other projects or robots?...</i>
        </p>
        <a
          href="https://apelie.com/"
          target="_blank"
          className="button button--solid"
        >
          <i>Visit apelie.com</i>
        </a>
      </div>
   
      <div className="section4">
        <img src={aboutUs1} alt="Apelie logo" />
        <img src={aboutUs2} alt="Apelie robots" />
        <img src={aboutUs3} alt="People working" />
        <img src={aboutUs4} alt="Apelie's office" />
      </div>
    </div>
  );
};

export default AboutUs;
