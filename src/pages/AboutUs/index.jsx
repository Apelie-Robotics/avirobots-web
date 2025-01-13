import {
  staff1,
  staff1Pc,
  staff2,
  staff2Pc,
  staff3,
  staff3Pc,
  staff4,
  staff4Pc,
  staff5,
  staff5Pc,
  staff6,
  staff6Pc,
  supporter1,
  supporter1Pc,
  supporter2,
  supporter2Pc,
  supporter3,
  supporter3Pc,
  supporter4,
  supporter5,
  supporter5Pc,
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
            <picture>
              <source srcSet={staff1Pc} media="(min-width: 1024px)" />
              <img src={staff1} alt="Arch. Lucas Jagodnik" loading="eager" />
            </picture>
            <h3>
              Arch. Lucas <b>Jagodnik</b>
            </h3>
            <div>
              <p className="position">CEO</p>
              <p className="hq">USA Hq</p>
            </div>
          </article>
          <article>
            <picture>
              <source srcSet={staff3Pc} media="(min-width: 1024px)" />
              <img src={staff3} alt="Eng. Facundo Garzón" loading="eager" />
            </picture>
            <h3>
              Eng. Facundo <b>Garzón</b>
            </h3>
            <div>
              <p className="position">COO</p>
              <p className="hq">Arg Hq</p>
            </div>
          </article>
          <article>
            <picture>
              <source srcSet={staff4Pc} media="(min-width: 1024px)" />
              <img src={staff4} alt="Des. Sol Rosenwald" loading="eager" />
            </picture>
            <h3>
              Des. Sol <b>Rosenwald</b>
            </h3>
            <div>
              <p className="position">PM</p>
              <p className="hq">Arg Hq</p>
            </div>
          </article>
          <article>
            <picture>
              <source srcSet={staff5Pc} media="(min-width: 1024px)" />
              <img src={staff5} alt="Eng. Mateo Giovagnoli" loading="eager" />
            </picture>
            <h3>
              Eng. Mateo <b>Giovagnoli</b>
            </h3>
            <div>
              <p className="position">CTO</p>
              <p className="hq">Arg Hq</p>
            </div>
          </article>
          <article>
            <picture>
              <source srcSet={staff6Pc} media="(min-width: 1024px)" />
              <img src={staff6} alt="Vet. Leonardo Bussi" loading="eager" />
            </picture>
            <h3>
              Vet. Leonardo <b>Bussi</b>
            </h3>
            <div>
              <p className="position">Advisor</p>
              <p className="hq">Arg Hq</p>
            </div>
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
        {window.innerWidth < 1024 ? (
          <CarouselMobile>
            <img
              src={supporter1}
              alt="Indacor logo"
              className="supporterLogo"
            />
            <img src={supporter2} alt="FEPASA logo" className="supporterLogo" />
            <img src={supporter3} alt="AC logo" className="supporterLogo" />
            <img src={supporter4} alt="Cladan logo" className="supporterLogo" />
            <img src={supporter5} alt="Porta logo" className="supporterLogo" />
            <img
              src={supporter6}
              alt="CONICET logo"
              className="supporterLogo"
            />
          </CarouselMobile>
        ) : (
          <div className="supportersLogos">
            <img
              src={supporter1Pc}
              alt="Indacor logo"
              className="supporterLogo"
              loading="lazy"
            />
            <img
              src={supporter2Pc}
              alt="FEPASA logo"
              className="supporterLogo"
              loading="lazy"
            />
            <img
              src={supporter3Pc}
              alt="AC logo"
              className="supporterLogo"
              loading="lazy"
            />
            <img
              src={supporter4}
              alt="Cladan logo"
              className="supporterLogo"
              loading="lazy"
            />
            <img
              src={supporter5Pc}
              alt="Porta logo"
              className="supporterLogo"
              loading="lazy"
            />
            <img
              src={supporter6}
              alt="CONICET logo"
              className="supporterLogo"
              loading="lazy"
            />
          </div>
        )}
      </div>
    </main>
  );
};

export default AboutUs;
