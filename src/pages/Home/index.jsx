import poultryScienceMobile from "/assets/picture/poultryScienceMobile.png";
import robot from "/assets/picture/robot.png";
import app from "/assets/picture/app.png";
import illustration1 from "/assets/picture/illustration1.png";
import illustration2 from "/assets/picture/illustration2.png";
import illustration3 from "/assets/picture/illustration3.png";
import illustration4 from "/assets/picture/illustration4.png";
import validationMobile from "/assets/picture/validationMobile.png";
import validation from "/assets/picture/validation.png";
import boots from "/assets/picture/boots.png";
import poultryArticle from "/assets/file/poultryArticleConicetApelie.pdf";
import history1 from "/assets/picture/history/history1.jpg";
import history2 from "/assets/picture/history/history2.jpg";
import history3 from "/assets/picture/history/history3.jpg";
import history4 from "/assets/picture/history/history4.jpg";
import history5 from "/assets/picture/history/history5.jpg";
import history6 from "/assets/picture/history/history6.jpg";
import history7 from "/assets/picture/history/history7.jpg";
import Carousel from "../../components/Carousel";
import CarouselMobile from "../../components/CarouselMobile";
import { useState } from "react";
import hero1 from "/assets/picture/hero1.png";
import hero2 from "/assets/picture/hero2.png";
import slide2Img from "/assets/picture/slide2Img.png";
import poultryScience from "/assets/picture/poultryScience.png";
import { RxDot, RxDotFilled } from "react-icons/rx";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import avisenseVideo from "/assets/video/avisense.mp4";
import poultryScience2 from "/assets/picture/poultryScience2.png";

const Home = () => {
  const [heroSlide, setHeroSlide] = useState(0);
  const amountOfSlidesHero = 1;
  const historyImages = [
    history1,
    history2,
    history3,
    history4,
    history5,
    history6,
    history7,
  ];
  return (
    <div className="home">
      <div className="section1">
        <div className="mobile">
          <div className="hero">
            <h1>
              CHICKENS<br></br>
              <i>DON'T</i>
              <br></br>WEAR<br></br>SHOES
            </h1>
            <img
              src={poultryScienceMobile}
              alt="Poultry Science article"
              className="poultryMobile"
            />
          </div>
          <div className="textContainer">
            <p>
              While we have made big progress in genetics, climate control and
              nutrition <b>we forgot about the soil</b>.
            </p>
            <p>
              It's time to focus on improving their litter. <br />{" "}
              <b>
                <i>We've created a cost-effective robot for that.</i>
              </b>
            </p>
            <a
              href={poultryArticle}
              target="_blank"
              className="button button--solid"
            >
              <i>Download file</i>
            </a>
            <div className="line"></div>
          </div>
        </div>
        <div className="pc">
          <div className="heroCarousel">
            <div
              className="carouselInner"
              style={{ transform: `translate(-${heroSlide * 100}%)` }}
            >
              <div className="slide1 slide">
                <img src={hero1} className="heroImg" />
                <h1>
                  CHICKENS<br></br>
                  <i>DON'T</i>
                  <br></br>WEAR<br></br>SHOES
                </h1>
                <div className="textContainer">
                  <p>
                    While we have made big progress in genetics, climate control
                    and nutrition <b>we forgot about the soil</b>.
                  </p>
                  <p>
                    It's time to focus on improving their litter. <br />{" "}
                    <b>
                      <i>We've created a cost-effective robot for that.</i>
                    </b>
                  </p>
                </div>
                <img
                  src={poultryScience}
                  alt="Poultry Science Article"
                  className="poultryArticle"
                />
                <a href={poultryArticle} className="button button--solid">
                  <i>Download file</i>
                </a>
              </div>

              <div className="slide2 slide">
                <img src={hero2} alt="Work desk" className="heroImg" />
                <h2>
                  <b>Our solution:</b> <i>Avisense System</i>
                </h2>
                <img
                  src={slide2Img}
                  alt="Robot and app"
                  className="robotAndApp"
                />
              </div>
            </div>

            <div className="buttonsContainer">
              <button
                className={`carouselButton ${
                  heroSlide > 0 ? "active" : "inactive"
                }`}
                onClick={() => {
                  if (heroSlide > 0) setHeroSlide(heroSlide - 1);
                }}
              >
                <HiOutlineChevronLeft />
              </button>
              <button
                className={`carouselButton ${
                  heroSlide < amountOfSlidesHero ? "active" : "inactive"
                }`}
                onClick={() => {
                  if (heroSlide < amountOfSlidesHero)
                    setHeroSlide(heroSlide + 1);
                }}
              >
                <HiOutlineChevronRight />
              </button>
            </div>

            <div className="dotContainer">
              {heroSlide === 0 ? <RxDotFilled /> : <RxDot />}
              {heroSlide === 1 ? <RxDotFilled /> : <RxDot />}
            </div>
          </div>
        </div>
      </div>
      <div className="section2">
        <video
          src={avisenseVideo}
          autoPlay
          muted
          loop
          className="robotVideo"
          onCanPlayThrough={(event) => event.currentTarget.play()}
        ></video>
        <div className="textContainer">
          <h2>
            An intelligent robot to{" "}
            <span>get rid of tedious or repetitive tasks</span>
          </h2>
          <p>
            We apply <b>robotics and AI</b> to enhance the poultry industry.
          </p>
        </div>
        <span className="ownership">
          <i>by Apelie Robotics</i>
        </span>
      </div>
      <div className="section3">
        <h2>
          <span>Our Solution:</span> <br /> <i>The Avisense System</i>
        </h2>
        <div className="contentContainer">
          <div className="content">
            <img src={robot} alt="Avisense robot" className="robotImg" />
            <h3>Avisense Robot</h3>
            <p>
              <b>Mobile, autonomous, and intelligent</b> robot designed to be an
              <b> assistant in the raising of broiler chickens</b>, moving
              through the sheds to{" "}
              <b>stimulate the birds and collect environmental data</b> such as
              temperature, humidity, and photos of the animals.
            </p>
          </div>
          <div className="content app">
            <img src={app} alt="Avisense app" />
            <h3>App</h3>
            <p>
              All this data is <b>uploaded in real time</b> to our{" "}
              <b>mobile & desktop app</b>, in which you can find{" "}
              <b>
                daily scoring, dashboards, real time photos, historic data,
                improvement suggestions, etc.
              </b>{" "}
              <br /> You can also upload manual information such as{" "}
              <b>mortality, lot number, sex, notes and observations</b> in order
              to have a complete track.
            </p>
          </div>
        </div>
      </div>
      <div className="section4">
        <h2>Benefits</h2>
        <div className="contentContainer">
          <div className="content">
            <img src={illustration1} alt="Factory illustration" />
            <p>
              <b>Increase production</b> index per year.
            </p>
          </div>
          <div className="line"></div>
          <div className="content">
            <img src={illustration2} alt="Feather illustration" />
            <p>
              <b>Secure animal welfare</b> through real time scouting.
            </p>
          </div>
          <div className="line"></div>
          <div className="content">
            <img src={illustration3} alt="Award illustration" />
            <p>
              <b>Traceability</b> for consumers and <b>better meat quality</b>.
            </p>
          </div>
          <div className="line"></div>
          <div className="content">
            <img src={illustration4} alt="Engine illustration" />
            <p>
              Task and control <b>automation</b>.
            </p>
          </div>
        </div>
      </div>
      <div className="section5">
        <h2>Validation</h2>
        <div className="references">
          <div className="reference">
            <div className="square orange"></div>
            <span>
              Shed <b>without</b> Robot
            </span>
          </div>
          <div className="reference">
            <div className="square purple"></div>
            <span>
              Shed <b>with</b> Robot
            </span>
          </div>
        </div>
        <img
          src={validationMobile}
          alt="Validation graphics"
          className="validationMobile"
        />
        <img
          src={validation}
          alt="Validation graphics"
          className="validation"
        />
      </div>
      <div className="section6">
        <div className="mobile">
          <h2>
            Our colaboration with{" "}
            <a href="https://www.linkedin.com/company/conicet/" target="_blank">
              CONICET
            </a>
            , published in the Poultry Science Magazine, an official journal of
            the{" "}
            <a
              href="https://www.linkedin.com/company/poultry-science-association/"
              target="_blank"
            >
              Poultry Science Association
            </a>
            .
          </h2>
          <div className="text">
            <div className="column">
              <p className="first">
                This paper serves as an important{" "}
                <b>milestone in recognizing the capabilities of our robot</b>,
                AviSense, within the poultry environment. It opens up a universe
                of potential studies, from exploring further benefits such as
                improved feed conversion and meat quality to potentially
                reducing mortality.
              </p>
              <p>
                Our first product is AviSense, an electric robot that{" "}
                <b>
                  not only encourages animal movement but also enhances soil
                  ventilation
                </b>{" "}
                by creating temporary openings.
              </p>
            </div>
            <p className="column">
              This results in healthier and more productive animals. We've
              observed a <b>4% increase in productivity</b> compared to houses
              without robots, translating to{" "}
              <b>
                fewer deaths, improved conversion rates, and higher-quality meat
              </b>
              . Additionally,{" "}
              <b>
                AviSense gathers data on temperature, humidity, and captures
                images
              </b>
              , aiding in the enhancement of poultry farming practices. And
              there are more features coming. <br />
              <b>
                One of Avisense's key pillars is it's commitment to
                affordability.
              </b>
            </p>
          </div>
          <div className="bootsContainer">
            <img src={boots} alt="Boots" />
            <a
              href={poultryArticle}
              target="_blank"
              className="button button--solid"
            >
              Download
            </a>
          </div>
        </div>
        <div className="pc">
          <img src={boots} alt="Boots" />
          <div className="content">
            <h2>
              Our colaboration with{" "}
              <a
                href="https://www.linkedin.com/company/conicet/"
                target="_blank"
              >
                CONICET
              </a>
              , published in the Poultry Science Magazine, an official journal
              of the{" "}
              <a
                href="https://www.linkedin.com/company/poultry-science-association/"
                target="_blank"
              >
                Poultry Science Association
              </a>
              .
            </h2>
            <div className="text">
              <div className="column">
                <p className="first">
                  This paper serves as an important{" "}
                  <b>milestone in recognizing the capabilities of our robot</b>,
                  AviSense, within the poultry environment. It opens up a
                  universe of potential studies, from exploring further benefits
                  such as improved feed conversion and meat quality to
                  potentially reducing mortality.
                </p>
                <p>
                  Our first product is AviSense, an electric robot that{" "}
                  <b>
                    not only encourages animal movement but also enhances soil
                    ventilation
                  </b>{" "}
                  by creating temporary openings.
                </p>
              </div>
              <p className="column">
                This results in healthier and more productive animals. We've
                observed a <b>4% increase in productivity</b> compared to houses
                without robots, translating to{" "}
                <b>
                  fewer deaths, improved conversion rates, and higher-quality
                  meat
                </b>
                . Additionally,{" "}
                <b>
                  AviSense gathers data on temperature, humidity, and captures
                  images
                </b>
                , aiding in the enhancement of poultry farming practices. And
                there are more features coming. <br />
                <b>
                  One of Avisense's key pillars is it's commitment to
                  affordability.
                </b>
              </p>
            </div>
            <a
              href={poultryArticle}
              target="_blank"
              className="button button--solid"
            >
              Download
            </a>
          </div>
          <img src={poultryScience2} alt="Poultry Science article" />
        </div>
      </div>
      <div className="section7">
        <div className="contentContainer">
          <div className="content">
            <span className="number">+10</span>
            <span className="text">Iterations</span>
          </div>
          <div className="line"></div>
          <div className="content">
            <span className="number">+30</span>
            <span className="text">Robot designs</span>
          </div>
          <div className="line"></div>
          <div className="content">
            <span className="number">+6000</span>
            <span className="text">Operative hours</span>
          </div>
          <div className="line"></div>
          <div className="content">
            <span className="number">+20</span>
            <span className="text">Robots deployed</span>
          </div>
        </div>
        <p>
          We <b>tested and validated</b> our product in numerous farms during
          its breeding campaigns
        </p>
      </div>
      <div className="section8">
        <h2>Our history</h2>
        <CarouselMobile images={historyImages} />
        <Carousel images={historyImages} />
      </div>
    </div>
  );
};

export default Home;
