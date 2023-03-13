import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Switch, Route, NavLink, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUserTie,
  faDriversLicense,
  faBriefcase,
  faEnvelope,
  faBars,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faInstagramSquare,
  faLinkedin,
  faGithubSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import profilePic from "./assets/Images/profilePic.jpg";
import "./App.css";
function App() {
  const location = useLocation();
  const [toggle, setToggle] = useState(true);
  const toggleHandler = () => {
    setToggle(!toggle);
  };

  return (
    <header
      className="container-fluid bg-light p-0"
      style={{ height: "100vh" }}
    >
      {/* Header Mobile  */}
      <div className="header-mobile">
        <div className="header-toggle" onClick={toggleHandler}>
          {toggle ? (
            <FontAwesomeIcon icon={faX} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </div>
        <h2>Mostafa Fathi</h2>
      </div>
      <div className="d-flex">
        <nav
          className={toggle ? "mainNav NavOn" : "mainNav NavOf"}
          style={{ height: "100vh", zIndex: 1000 }}
        >
          <div className="image-container">
            <h2 className="header-name">Mostafa Fathi</h2>
            <img src={profilePic} alt="profile-pic" />
          </div>

          <ul className="nav nav-pills flex-column">
            <li
              className="nav-item"
              onClick={() => {
                setToggle(false);
              }}
            >
              <NavLink to="/MyPortfolio/home" exact className="nav-link">
                <span className="nav-menu-icon">
                  <FontAwesomeIcon icon={faHouse} />
                </span>
                Home
              </NavLink>
            </li>
            <li
              className="nav-item"
              onClick={() => {
                setToggle(false);
              }}
            >
              <NavLink to="/MyPortfolio/about" className="nav-link ">
                <span className="nav-menu-icon">
                  <FontAwesomeIcon icon={faUserTie} />
                </span>
                About Me
              </NavLink>
            </li>
            <li
              className="nav-item"
              onClick={() => {
                setToggle(false);
              }}
            >
              <NavLink to="/MyPortfolio/resume" className="nav-link">
                <span className="nav-menu-icon">
                  <FontAwesomeIcon icon={faDriversLicense} />
                </span>
                Resume
              </NavLink>
            </li>
            <li
              className="nav-item"
              onClick={() => {
                setToggle(false);
              }}
            >
              <NavLink to="/MyPortfolio/portfolio" className="nav-link">
                <span className="nav-menu-icon">
                  <FontAwesomeIcon icon={faBriefcase} />
                </span>
                Portfolio
              </NavLink>
            </li>
            <li
              className="nav-item"
              onClick={() => {
                setToggle(false);
              }}
            >
              <NavLink to="/MyPortfolio/contact" className="nav-link">
                <span className="nav-menu-icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="nav-footer">
            {/* <!--Social Links--> */}
            <ul className="social">
              <li>
                <a
                  href="https://www.facebook.com/mostafa.fathi.92167/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebookSquare} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/mos__tafa_1/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagramSquare} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/mostafa-fathi-a962a820b/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Mostafa142"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faGithubSquare} />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/Mos__tafa_1"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitterSquare} />
                </a>
              </li>
            </ul>
            {/* <!--Copyright Text--> */}
            <div className="copy text-center">
              <p>
                2022 &copy; <span>Mostafa Fathi</span>
                <br />
                All Right Reserved.
              </p>
            </div>
          </div>
        </nav>
        <main
          id="main"
          className="wrapper"
          onClick={() => {
            setToggle(false);
          }}
        >
          <AnimatePresence>
            <Switch location={location} key={location.pathname}>
              <Route path="/MyPortfolio/about" component={About} />
              <Route path="/MyPortfolio/resume" component={Resume} />
              <Route path="/MyPortfolio/portfolio" component={Portfolio} />
              <Route path="/MyPortfolio/contact" component={Contact} />
              <Route path="/" component={Home} />
              <Route path="/MyPortfolio/" component={Home} />
              <Route path="/MyPortfolio/home" component={Home} />
            </Switch>
          </AnimatePresence>
        </main>
      </div>
    </header>
  );
}
<>
  <Home />
  <About />
  <Resume />
  <Portfolio />
  <Contact />
</>;

export default App;
