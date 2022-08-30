import { motion } from "framer-motion";
import "./Portfolio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import Img1 from "./../Images/img-1.jpg";
import Img2 from "./../Images/img-2.jpg";
import Img3 from "./../Images/img-3.jpg";
import Img4 from "./../Images/img-4.jpg";
import Img5 from "./../Images/img-5.jpg";
import Img6 from "./../Images/img-6.jpg";
import TODO from "./../Images/TODO.png";
import FoodApp from "./../Images/Food Order App.png";
import OnlineStore from "./../Images/OnlineStore.png";
import MyReads from "./../Images/MyReads.png";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.4,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const pageStyle = {
  width: "100 %",
  height: "100vh",
  backgroundColor: "#2c2d2f",
};
const Portfolio = () => {
  return (
    <motion.div
      style={pageStyle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      {/* <<!--Porfolio Section Start--> */}
      <section id="portfolio" className="portfolio-section pt-page pb-1">
        <motion.div
          className="section-container"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* <!--Page Heading--> */}
          <motion.div
            className="page-heading"
            initial={{ y: -250 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <span className="icon">
              <FontAwesomeIcon icon={faBriefcase} />
            </span>
            <h2>Portfolio.</h2>
          </motion.div>

          <motion.div className="row" variants={item}>
            {/* <!--Portfolio Filter--> */}
            <div className="col-md-12">
              <div className="subheading">
                <h3>My Projects</h3>
              </div>
            </div>
          </motion.div>

          {/* <!--Portfolio Items--> */}
          <div className="row portfolio-items mb-5 justify-content-center ">
            {/* <!--Portfolio Item--> */}
            <motion.div className="item col-lg-6 col-sm-10" variants={item}>
              <a
                className="image-link"
                href="https://mostafa142.github.io/International-school-system/"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <figure>
                  <img src={Img1} alt="website cover" />
                  <figcaption>
                    <h4>International School System</h4>
                    <p>HTML,CSS & JS</p>
                  </figcaption>
                </figure>
              </a>
            </motion.div>

            {/* <!--Portfolio Item--> */}
            <motion.div className="item col-lg-6 col-sm-10" variants={item}>
              <a
                className="ajax-link"
                href="https://mostafa142.github.io/TODO-App/"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <figure>
                  <img src={TODO} alt="website cover" />
                  <figcaption>
                    <h4>TODO</h4>
                    <p>React js App</p>
                  </figcaption>
                </figure>
              </a>
            </motion.div>
            <motion.div className="item col-lg-6 col-sm-10" variants={item}>
              <a
                className="image-link"
                href="/"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <figure>
                  <img src={OnlineStore} alt="website cover" />
                  <figcaption>
                    <h4>Online Store (on Update!)</h4>
                    <p>
                      React Js app using (React Hooks, React Redux & graphql)
                    </p>
                  </figcaption>
                </figure>
              </a>
            </motion.div>

            {/* <!--Portfolio Item--> */}
            <motion.div className="item col-lg-6 col-sm-10" variants={item}>
              <a
                className="ajax-link"
                href="/"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <figure>
                  <img src={MyReads} alt="website cover" />
                  <figcaption>
                    <h4>MyReads App (on Update!)</h4>
                    <p>React js app using (React Hooks & Udacity Api)</p>
                  </figcaption>
                </figure>
              </a>
            </motion.div>

            {/* <!--Portfolio Item--> */}
            <motion.div className="item col-lg-6 col-sm-10" variants={item}>
              <a
                className="image-link"
                href="https://mostafa142.github.io/Food-Order-App/"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <figure>
                  <img src={FoodApp} alt="website cover" />
                  <figcaption>
                    <h4>Food Order App</h4>
                    <p>React Js app (React Hooks)</p>
                  </figcaption>
                </figure>
              </a>
            </motion.div>

            {/* <!--Portfolio Item--> */}
            <motion.div className="item col-lg-6 col-sm-10" variants={item}>
              <a
                className="ajax-link"
                href="https://mostafa142.github.io/Template_1_HTML_and_CSS/"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <figure>
                  <img src={Img2} alt="website cover" />
                  <figcaption>
                    <h4>Leon Template</h4>
                    <p>Html & CSS</p>
                  </figcaption>
                </figure>
              </a>
            </motion.div>

            <motion.div className="item col-lg-6 col-sm-10" variants={item}>
              <a
                className="ajax-link"
                href="https://mostafa142.github.io/Spice-Store/"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <figure>
                  <img src={Img3} alt="website cover" />
                  <figcaption>
                    <h4>Spice Store</h4>
                    <p>HTML & CSS </p>
                  </figcaption>
                </figure>
              </a>
            </motion.div>

            <motion.div className="item col-lg-6 col-sm-10" variants={item}>
              <a className="ajax-link" href="/">
                <figure>
                  <img src={Img4} alt="website cover" />
                  <figcaption>
                    <h4>Sports Store </h4>
                    <p>On Update...!</p>
                  </figcaption>
                </figure>
              </a>
            </motion.div>

            <motion.div className="item col-lg-6 col-sm-10" variants={item}>
              <a
                className="ajax-link"
                href="/"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <figure>
                  <img src={Img5} alt="website cover" />
                  <figcaption>
                    <h4>Gauge Engineering</h4>
                    <p>In Progress...!</p>
                  </figcaption>
                </figure>
              </a>
            </motion.div>

            <motion.div className="item col-lg-6 col-sm-10" variants={item}>
              <a
                className="ajax-link"
                href="https://mostafa142.github.io/Life-Of-Giving/"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <figure>
                  <img src={Img6} alt="website cover" />
                  <figcaption>
                    <h4>Life Of Giving</h4>
                    <p>React Js</p>
                  </figcaption>
                </figure>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>
      {/* <!--Porfolio Section End--> */}
    </motion.div>
  );
};
export default Portfolio;
