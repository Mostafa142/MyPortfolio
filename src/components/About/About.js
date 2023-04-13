import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserTie,
  faLaptop,
  faEye,
  faLaptopCode,
  faBitcoinSign,
} from "@fortawesome/free-solid-svg-icons";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import "./About.css";
import sign from "../../assets/Images/icons/Sign.png";
import skill1 from "../../assets/Images/icons/pngegg.png";
import skill2 from "../../assets/Images/icons/JS.png";
import skill3 from "../../assets/Images/icons/bootstrap.png";
import skill4 from "../../assets/Images/icons/react.png";
import skill5 from "../../assets/Images/icons/jquery.png";
import skill6 from "../../assets/Images/icons/TS.png";
import skill7 from "../../assets/Images/icons/c++.png";
import skill8 from "../../assets/Images/icons/git.png";
import skill9 from "../../assets/Images/icons/css.png";
import skill10 from "../../assets/Images/icons/formik.png";
import skill11 from "../../assets/Images/icons/Jira.png";
import skill12 from "../../assets/Images/icons/png-transparent-material-ui-logo.png";
import skill13 from "../../assets/Images/icons/Postman.png";
import skill14 from "../../assets/Images/icons/redux.svg";
import skill15 from "../../assets/Images/icons/SASS.png";

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
const About = () => {
  return (
    <motion.div
      style={pageStyle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <section id="about" className="about-section pt-page">
        <motion.div
          className="section-container"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* page-heading  */}
          <motion.div
            className="page-heading"
            initial={{ y: -250 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <span className="icon">
              <FontAwesomeIcon icon={faUserTie} />
            </span>
            <h2>About Me.</h2>
          </motion.div>
          {/* about info row start */}
          <motion.div className="row about mb-5" variants={item}>
            <div className="col-lg-8">
              {/* Personal Intro*/}
              <h3 className="mb-4">Front-End Developer</h3>
              <p>
                Enthusiastic developer with passion for tailored solutions
                seeking the position of a Full Stack Developer in a thriving,
                exciting and growing company, where I can utilize my skills to
                further work towards personal and professional development and
                contribute towards the prosperity of the organisation.
              </p>

              {/* Signature Image */}
              <div className="signature mt-20">
                <img src={sign} alt="signature" />
              </div>
            </div>

            {/* Personal Info  */}
            <div className="col-lg-4">
              <div className="about-info">
                <h3 className="mb-4">Personal Information</h3>
                <ul className="list-unstyled">
                  <li>
                    <span className="title">Name</span>
                    <span className="value">Mostafa Fathi</span>
                  </li>
                  <li>
                    <span className="title">Age</span>
                    <span className="value">22 Years</span>
                  </li>
                  <li>
                    <span className="title">Residence</span>
                    <span className="value">Egypt</span>
                  </li>
                  <li>
                    <span className="title">Address</span>
                    <span className="value">Menofia,Shibin El-Kom</span>
                  </li>
                  <li>
                    <span className="title">Email</span>
                    <span className="value">
                      mostafafathielsebaey@gmail.com
                    </span>
                  </li>
                  <li>
                    <span className="title">Phone</span>
                    <span className="value">(+20) 01066924393</span>
                  </li>
                  <li>
                    <span className="title">Freelance</span>
                    <span className="value">Available</span>
                  </li>
                </ul>
                <div className="resume-button mt-5">
                  <a
                    className="btn-main"
                    target={"_blank"}
                    rel={"noreferrer"}
                    href="https://drive.google.com/file/d/1HVf0MKrMUpG9qXbgZWN2c9gJdevkPiGb/view?usp=share_link"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          {/* about info row End */}
          {/* Services Row Start */}
          <motion.div className="row services mb-5" variants={item}>
            <div className="col-md-12">
              <div className="subheading">
                <h3>Services</h3>
              </div>
            </div>

            {/* Service Item */}
            <div className="col-lg-3 col-sm-6">
              <div className="service-item">
                <div className="icon">
                  <FontAwesomeIcon icon={faLaptop} />
                </div>
                <h4>Web Development</h4>
                <p>
                  responsible for the design and construction of websites,
                  ensure that sites meet user expectations by ensuring they look
                  good, run smoothly and offer easy access points with no
                  loading issues between pages or error messages.
                </p>
              </div>
            </div>

            {/* Service Item */}
            <div className="col-lg-3 col-sm-6">
              <div className="service-item">
                <div className="icon">
                  <FontAwesomeIcon icon={faEye} />
                </div>
                <h4>Web Design</h4>
                <p>
                  responsible for creating the design and layout of a website or
                  web pages. It and can mean working on a brand new website or
                  updating an already existing site
                </p>
              </div>
            </div>

            {/* Service Item */}
            <div className="col-lg-3 col-sm-6">
              <div className="service-item">
                <div className="icon">
                  <FontAwesomeIcon icon={faLaptopCode} />
                </div>
                <h4>Responsive Design</h4>
                <p>
                  dynamic changes to the appearance of a website, depending on
                  the screen size and orientation of the device being used to
                  view it
                </p>
              </div>
            </div>

            {/* Service Item */}
            <div className="col-lg-3 col-sm-6">
              <div className="service-item">
                <div className="icon">
                  <FontAwesomeIcon icon={faBitcoinSign} />
                </div>
                <h4>Freelancing</h4>
                <p>
                  building a website from start to completion, consulting about
                  the use of the best web technologies, and tweaking existing
                  website design and layout
                </p>
              </div>
            </div>
          </motion.div>
          {/* Services Row End */}

          {/* Clients Row Start */}
          <div className="row clients mb-5 pb-5">
            <div className="col-md-12">
              <div className="subheading">
                <h3>Skills</h3>
              </div>
            </div>

            <OwlCarousel
              className="owl-theme"
              items={4}
              autoplay
              nav
              loop
              dots={false}
            >
              {/* Skill */}
              <div className="item Skill-logo">
                <a href="##">
                  <img src={skill1} alt="Client" />
                </a>
              </div>
              {/* Skill */}
              <div className="item Skill-logo">
                <a href="##">
                  <img src={skill2} alt="Client" />
                </a>
              </div>

              {/* Skill */}
              <div className="item Skill-logo">
                <a href="##">
                  <img src={skill3} alt="Client" />
                </a>
              </div>

              {/* Skill */}
              <div className="item Skill-logo">
                <a href="##">
                  <img src={skill4} alt="Client" />
                </a>
              </div>

              {/* Skill */}
              <div className="item Skill-logo">
                <a href="##">
                  <img src={skill5} alt="Client" />
                </a>
              </div>

              {/* Skill */}
              <div className="item Skill-logo">
                <a href="##">
                  <img src={skill6} alt="Client" />
                </a>
              </div>

              {/* Skill */}
              <div className="item Skill-logo">
                <a href="##">
                  <img src={skill7} alt="Client" />
                </a>
              </div>

              {/* Skill */}
              <div className="item Skill-logo">
                <a href="##">
                  <img src={skill8} alt="Client" />
                </a>
              </div>

              {/* Skill */}
              <div className="item Skill-logo">
                <a href="##">
                  <img src={skill9} alt="Client" />
                </a>
              </div>

              {/* Skill */}
              <div className="item Skill-logo">
                <a href="##">
                  <img src={skill10} alt="Client" />
                </a>
              </div>
              {/* Skill */}
              <div className="item Skill-logo">
                <a href="##">
                  <img src={skill11} alt="Client" />
                </a>
              </div>
              {/* Skill */}
              <div className="item Skill-logo">
                <a href="##">
                  <img src={skill12} alt="Client" />
                </a>
              </div>
              {/* Skill */}
              <div className="item Skill-logo">
                <a href="##">
                  <img src={skill13} alt="Client" />
                </a>
              </div>
              {/* Skill */}
              <div className="item Skill-logo">
                <a href="##">
                  <img src={skill14} alt="Client" />
                </a>
              </div>
              {/* Skill */}
              <div className="item Skill-logo">
                <a href="##">
                  <img src={skill15} alt="Client" />
                </a>
              </div>
            </OwlCarousel>
          </div>
          {/* Clients Row End */}
        </motion.div>
      </section>
    </motion.div>
  );
};
export default About;
