import poultryArticle from "/assets/file/poultryArticleConicetApelie.pdf";
import {
  flockerMobile,
  illustration1,
  illustration2,
  illustration3,
  validationMobile,
  illustration4,
  app,
  poultryScience,
  robotAndApp,
  validationPc,
  boots,
  videoFlockerPov
} from "../../assets";
import TrialForm from "../../components/TrialForm";
import CarouselMobile from "../../components/CarouselMobile";
import { useState } from "react";

const Home = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <main className="home">
      <h1 className="sr-only">Home</h1>

      <section className="section1">
        <div>
          <h2>
            <i>Who</i> will take care of your farm in the next years?
          </h2>
          <p>
            Our <b>Flocker robots</b>, can.
          </p>
        </div>
        <div className="buttonContainer">
          <a href="#trial" className="button button--solid">
            Book your trial now
          </a>
          <a href="#video" className="button button--outline">
            Watch the video
          </a>
        </div>
      </section>

      <section id="solution" className="section2Container">
        <div className="section2">
          <div className="titles">
            <h2>Flocker Robot</h2>
            <p>
              Our solution features two systems that work together; the Flocker
              robot and its dedicated app.
            </p>
          </div>
          <CarouselMobile>
            <article className="card">
              <div className="imgContainer">
                <img src={flockerMobile} alt="Flocker robot" />
              </div>
              <h3>About the Flocker Robot</h3>
              <p>
                It's a Mobile, autonomous, and intelligent robot designed to be
                an assistant in the raising of broiler chickens, moving through
                the sheds to stimulate the birds and collect environmental data
                such as temperature, humidity, and photos of the animals.
              </p>
            </article>
            <article className="card">
              <div className="imgContainer appContainer">
                <img src={app} alt="Mobile Flocker app" />
              </div>
              <h3>About the App</h3>
              <p>
                All this data is uploaded in real time to our mobile & desktop
                app, in which you can find daily scoring, dashboards, real time
                photos, historic data, improvement suggestions, etc.
              </p>
              <p>
                You can also upload manual information such as mortality, lot
                number, sex, notes and observations in order to have a complete
                track.
              </p>
            </article>
          </CarouselMobile>
        </div>

        <div className="section2Pc">
          <div className="textContainer">
            <h2>Flocker Robot</h2>
            <p>
              <b>Flocker is a Mobile, autonomous, and intelligent</b> robot
              designed to be an{" "}
              <b>assistant in the raising of broiler chickens</b>, moving
              through the sheds to{" "}
              <b>stimulate the birds and collect environmental data</b> such as
              temperature, humidity, and photos of the animals.
            </p>
            <p>
              All this data is <b>uploaded in real time</b> to our{" "}
              <b>mobile & desktop app</b>, in which you{" "}
              <b>
                can find daily scoring, dashboards, real time photos , historic
                data , improvement suggestions, etc.
              </b>
            </p>
            <p>
              You can also upload manual information such as{" "}
              <b>mortality, lot number, sex, notes and observations</b> in order
              to have a complete track.
            </p>
          </div>
          <img src={robotAndApp} alt="AviRobot and app" />
        </div>
      </section>

      <section className="section3">
        <video src={videoFlockerPov}
          width="1280"
          height="720"
          autoPlay={true}
          muted={true}
          loop={true}
          playsInline={true}
          controls={false}
          onContextMenu={(e) => { e.preventDefault(); return false; }}
        ></video>
        <div className="contentContainer">
          <div className="titles">
            <h2>The Robot's Eyes <b>in Real-Time</b></h2>
            <p>The Flocker Robot is operating NOW, click below and see through his eyes.</p>
          </div>
        </div>
      </section>

      <section className="section4">
        <h2>Benefits of our Flocker Robot</h2>
        <div className="benefitsContainer">
          <article>
            <img
              src={illustration3}
              alt="Traceability and quality illustration"
            />
            <p>Tackle Labour Shortage</p>
          </article>
          <article>
            <img src={illustration1} alt="Production illustration" />
            <p>Biosecurity</p>
          </article>
          <article>
            <img src={illustration2} alt="Precision illustration" />
            <p>Precision Livestock farming</p>
          </article>
          <article>
            <img src={illustration4} alt="Animal welfare illustration" />
            <p>Animal Welfare</p>
          </article>
        </div>
      </section>

      <div className="section5">
        <h2>Validation</h2>
        <picture>
          <source srcSet={validationPc} media="(min-width: 1024px)" />
          <img
            src={validationMobile}
            alt="Validation graphics"
            className="validation"
            loading="lazy"
          />
        </picture>
        <div className="references">
          <div className="reference">
            <div className="square orange" />
            <span>
              Shed <b>without</b> Robot
            </span>
          </div>
          <div className="reference">
            <div className="square purple" />
            <span>
              Shed <b>with</b> Robot
            </span>
          </div>
        </div>
      </div>

      <section id="video" className={`section6 ${isVideoPlaying && "isPlaying"}`}>
        <div className="text">
          <h2>An intelligent robot to get rid of <i>tedious</i> or{" "} <i>repetitive</i> tasks.</h2>
          <p>We apply <b>robotics and AI</b> to enhance the poultry industry.</p>
        </div>
        {/* <video src={robotVideo} controls={false} autoPlay muted playsInline onPlay={() => setIsVideoPlaying(true)} /> */}
        <iframe
          loading="lazy"
          src="https://www.youtube.com/embed/tuXtUnuKQIg?enablejsapi=1&playlist=tuXtUnuKQIg&loop=1&autoplay=1&mute=1&playsinline=1&controls=0&rel=0"
          frameborder="0"
          allow="autoplay; encrypted-media"
        ></iframe>
      </section>

      <div className="section7">
        <h2>
          Our colaboration with{' '}<a href="https://www.linkedin.com/company/conicet/" target="_blank">CONICET</a>,
          published in the Poultry Science Magazine, an official journal of the{' '}
          <a href="https://www.linkedin.com/company/poultry-science-association/" target="_blank">Poultry Science Association</a>.
        </h2>
        <div className="content">
          <img src={boots} alt="Boots" className="boots pc" loading="lazy" />
          <div className="middleContainer">
            <div className="text">
              <p>
                This paper serves as an important <b>milestone in recognizing the capabilities of our robot</b>,
                AviSense, within the poultry environment.
                It opens up a universe of potential studies,
                from exploring further benefits such as improved feed conversion and meat quality to potentially reducing mortality.
              </p>
              <p>
                Our first product is AviSense, an electric robot that{" "}
                <b>
                  not only encourages animal movement but also enhances soil
                  ventilation
                </b>{" "}
                by creating temporary openings.
              </p>
              <p>
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
              className="button button--solid pc"
            >
              Download
            </a>
          </div>
          <div className="articleContainer">
            <img
              src={poultryScience}
              alt="Poultry Science magazine article"
              className="article"
              loading="lazy"
            />
            <a
              href={poultryArticle}
              target="_blank"
              className="button button--solid mobile"
            >
              Download
            </a>
          </div>
        </div>
      </div>

      <section className="section8" id="trial">
        <TrialForm />
      </section>
    </main>
  );
};

export default Home;
