import {
  staff1,
  staff2,
  staff3,
  staff4,
  staff5,
  supporter1,
  supporter2,
  supporter3,
  supporter4,
  supporter5,
  supporter6,
} from "../../assets";
import CarouselMobile from "../../components/CarouselMobile";

const AboutUs = () => {
  return (
    <main className="aboutUs">
      <h1>About us</h1>
      <div className="contentContainer">
        <div className="pictures">
          <article>
            <img src={staff1} alt="Arch. Lucas Jagodnik" />
            <h3>
              Arch. Lucas <b>Jagodnik</b>
            </h3>
            <div>
              <p className="position">CEO</p>
              <p className="hq">USA Hq</p>
            </div>
          </article>
          <article>
            <img src={staff2} alt="Des. Tadeo Cernusco" />
            <h3>
              Des. Tadeo <b>Cernusco</b>
            </h3>
            <div>
              <p className="position">COS</p>
              <p className="hq">USA Hq</p>
            </div>
          </article>
          <article>
            <img src={staff3} alt="Eng. Facundo Garzón" />
            <h3>
              Eng. Facundo <b>Garzón</b>
            </h3>
            <div>
              <p className="position">COO</p>
              <p className="hq">Arg Hq</p>
            </div>
          </article>
          <article>
            <img src={staff4} alt="Des. Sol Rosenwald" />
            <h3>
              Des. Sol <b>Rosenwald</b>
            </h3>
            <div>
              <p className="position">PM</p>
              <p className="hq">Arg Hq</p>
            </div>
          </article>
          <article>
            <img src={staff5} alt="Eng. Mateo Giovagnoli" />
            <h3>Eng. Mateo Giovagnoli</h3>
            <div>
              <p className="position">CTO</p>
              <p className="hq">Arg Hq</p>
            </div>
          </article>
          <article>
            <img src="" alt="Staff member" />
            <h3></h3>
            <p className="position"></p>
            <p className="hq"></p>
          </article>
        </div>
        <div className="text">
          <p>
            At AviRobots, we bring together expertise and innovation to redefine
            poultry farming through advanced robotics. Our solutions are
            designed with a deep understanding of the industry's needs, focusing
            on practicality, adaptability, and meaningful impact.
          </p>
          <p>
            Our autonomous robots provide real-time insights and enhance farm
            efficiency, improving both animal welfare and operational outcomes.
            With every design and feature, we aim to simplify adoption and
            deliver technology that makes a tangible difference, ensuring farms
            of all sizes can thrive in a rapidly evolving world.
          </p>
        </div>
      </div>
      <div className="supportersContainer">
        <h2>Our supporters</h2>
        <CarouselMobile>
          <img src={supporter1} alt="Indacor logo" className="supporterLogo" />
          <img src={supporter2} alt="FEPASA logo" className="supporterLogo" />
          <img src={supporter3} alt="AC logo" className="supporterLogo" />
          <img src={supporter4} alt="Cladan logo" className="supporterLogo" />
          <img src={supporter5} alt="Porta logo" className="supporterLogo" />
          <img src={supporter6} alt="CONICET logo" className="supporterLogo" />
        </CarouselMobile>
      </div>
    </main>
  );
};

export default AboutUs;
