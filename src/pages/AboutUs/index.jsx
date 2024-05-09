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
        <img src={apelieLogo} alt="Apelie logo" />
        <p>
          We are a group of enthusiasts composed of engineers, developers,
          designers, architects and makers,{" "}
          <b>
            which firmly believe in robotics as the future of tedious and
            dangerous tasks
          </b>
          .
        </p>
        <p>
          <b>We want to revolutionize</b> those industries in which people can
          and must have the support of a friendly robot.
        </p>
        <p className="weAre">
          <i>We are Apelie Robotics.</i>
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
      <div className="section3">
        <h2 className="titleMobile">Our Story</h2>
        <img src={boardPhoto} alt="Founders photo" />
        <div className="text">
          <h2 className="title">Our story</h2>
          <p>
            <b>Apelie Robotics' origins are back to 2019</b>, when our{" "}
            <b>CEO, Arch. Lucas Jagodnik</b>, decided to build a robot for one
            of his companies. This robot was meant to demolish an 8 story
            building in two months. The goal was achieved and a dream began.
          </p>
          <p>
            At first, we were a bunch of curious people doing research and
            testing.{" "}
            <b>
              As the year went by, we consolidated our team and developed 3
              parallel projects in which we developed prototypes and
              validations.
            </b>
            <br />
            This brought us a wealth of experience and know-how which we
            nowadays apply in every project and solution we offer.
            <br />
            <b>Not only do we focus in robotics, but also in AI</b> processes
            and data analysis to provide whole picture solutions.
          </p>
        </div>
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
