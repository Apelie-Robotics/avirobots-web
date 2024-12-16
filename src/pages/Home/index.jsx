import poultryArticle from "/assets/file/poultryArticleConicetApelie.pdf";
import {
  avisense,
  boots,
  illustration1,
  illustration2,
  illustration3,
  locationIcon,
  validationMobile,
} from "../../assets";
import TrialForm from "../../components/TrialForm";

const Home = () => {
  return (
    <main className="home">
      <h1 className="sr-only">Home</h1>

      <section className="section1">
        <div>
          <h2>
            <i>Who</i> will take care of your farm in the next years?
          </h2>
          <p>Our Flocker robots, can.</p>
        </div>
        <div className="buttonContainer">
          <a href="#trial" className="button button--solid">
            Book your trial now
          </a>
          <a href="" className="button button--outline">
            Watch the video
          </a>
        </div>
      </section>

      <section className="section2">
        <div className="titles">
          <h2>Flocker Robot</h2>
          <p>
            Our solution features two systems that work together; the Flocker
            robot and its dedicated app.
          </p>
        </div>
        <div className="cardsContainer">
          <article className="card">
            <div className="imgContainer">
              <img src={avisense} alt="Flocker robot" />
            </div>
            <h3>About the Flocker Robot</h3>
            <p>
              Its a Mobile, autonomous, and intelligent robot designed to be an
              assistant in the raising of broiler chickens, moving through the
              sheds to stimulate the birds and collect environmental data such
              as temperature, humidity, and photos of the animals.
            </p>
          </article>
          <article className="card">
            <div className="imgContainer appContainer">
              <img
                src="https://static.vecteezy.com/system/resources/previews/012/871/561/non_2x/realistic-smartphone-mockup-vertical-mobile-device-concept-for-presentation-information-graphics-app-display-png.png"
                alt="Mobile Flocker app"
              />
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
        </div>
      </section>

      <section className="section3">
        <h2>Benefits of our Flocker Robot</h2>
        <div className="benefitsContainer">
          <article>
            <img src={illustration1} alt="Production illustration" />
            <p>
              <b>Increase production</b> index per year
            </p>
          </article>
          <article>
            <img src={illustration2} alt="Precision illustration" />
            <p>
              <b>Precision Livestock</b> farming
            </p>
          </article>
          <article>
            <img
              src={illustration3}
              alt="Traceability and quality illustration"
            />
            <p>
              <b>Traceability</b> for consumers and <b>better meat quality</b>
            </p>
          </article>
          <article>
            <img src={illustration1} alt="Animal welfare illustration" />
            <p>Animal Welfare</p>
          </article>
        </div>
      </section>

      <section className="section4">
        <div className="titles">
          <h2>
            The robot's eyes <b>in real time</b>
          </h2>
          <p>
            The Flocker Robot is operating NOW, click below and see through his
            eyes.
          </p>
        </div>
        {/* <iframe src="" frameborder="0"></iframe> */}
        <div>
          <img
            src={locationIcon}
            alt="Location icon"
            className="locationIcon"
          />
          <span>Mildmay, Canada.</span>
        </div>
      </section>

      <div className="section5">
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
        <p>
          This paper serves as an important{" "}
          <b>milestone in recognizing the capabilities of our robot</b>,
          AviSense, within the poultry environment. It opens up a universe of
          potential studies, from exploring further benefits such as improved
          feed conversion and meat quality to potentially reducing mortality.
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
          This results in healthier and more productive animals. We've observed
          a <b>4% increase in productivity</b> compared to houses without
          robots, translating to{" "}
          <b>
            fewer deaths, improved conversion rates, and higher-quality meat
          </b>
          . Additionally,{" "}
          <b>
            AviSense gathers data on temperature, humidity, and captures images
          </b>
          , aiding in the enhancement of poultry farming practices. And there
          are more features coming. <br />
          <b>
            One of Avisense's key pillars is it's commitment to affordability.
          </b>
        </p>
        <div className="bootsContainer">
          <img src={boots} alt="Boots" />
          <a
            href={poultryArticle}
            target="_blank"
            className="button button--solid"
          >
            Download <i>now</i>
          </a>
        </div>

        {/* <div className="pc">
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
        </div> */}
      </div>

      <section className="section6">
        <h2>
          An intelligent robot to get rid of <i>tedious</i> or <i>repetitive</i>{" "}
          tasks.
        </h2>
        <p>We apply robotics and AI to enhance the poultry industry.</p>
        {/* <iframe src="" frameborder="0"></iframe> */}
      </section>

      <div className="section7">
        <h2>Validation</h2>
        {/* <div className="references">
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
        </div> */}
        <img
          src={validationMobile}
          alt="Validation graphics"
          className="validation"
        />
        {/* <img
          src={validation}
          alt="Validation graphics"
          className="validation"
        /> */}
      </div>

      <section className="section8">
        <TrialForm />
      </section>
    </main>
  );
};

export default Home;
