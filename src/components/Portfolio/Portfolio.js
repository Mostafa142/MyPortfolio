import { motion } from "framer-motion";
import "./Portfolio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import { ProjectsData } from "./ProjectsData";
import { useState } from "react";

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
  const [filteredProjects, setFilteredProjects] = useState(
    ProjectsData.slice(0).reverse()
  );
  const [activeAll, setActiveAll] = useState("active");
  const [activeProjects, setActiveProjects] = useState("");
  const [activeChallenges, setActiveChallenges] = useState("");
  const handleBtns = (e) => {
    let products;
    if (e === "all") {
      setFilteredProjects(ProjectsData.slice(0).reverse());
      setActiveAll("active");
      setActiveProjects("");
      setActiveChallenges("");
    } else if (e === "projects") {
      products = ProjectsData.filter((item) => item.type === "project");
      setFilteredProjects(products);
      setActiveAll("");
      setActiveProjects("active");
      setActiveChallenges("");
    } else if (e === "challenges") {
      products = ProjectsData.filter((item) => item.type === "challenge");
      setFilteredProjects(products.reverse());
      setActiveAll("");
      setActiveProjects("");
      setActiveChallenges("active");
    }
  };
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

          <motion.div className="row" variants={item}>
            <div className="col-md-12 portfolio-filter text-center">
              <ul>
                <li
                  onClick={(e) => handleBtns(e.target.textContent)}
                  className={activeAll}
                >
                  all
                </li>
                <li
                  onClick={(e) => handleBtns(e.target.textContent)}
                  value={"projects"}
                  className={activeProjects}
                >
                  projects
                </li>
                <li
                  onClick={(e) => handleBtns(e.target.textContent)}
                  value={"challenges"}
                  className={activeChallenges}
                >
                  challenges
                </li>
              </ul>
            </div>
          </motion.div>

          {/* <!--Portfolio Items--> */}
          <div className="row portfolio-items mb-5 justify-content-center ">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="item col-lg-6 col-sm-10"
                variants={item}
                whileHover={{ scale: 0.9, rotate: project.rotate }}
                whileTap={{
                  scale: 1,
                  rotate: 2,
                  borderRadius: "100%",
                }}
              >
                <a
                  className="image-link"
                  href={project.liveLink}
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <figure>
                    <img src={project.img} alt="website cover" />
                    <figcaption>
                      <h4>{project.title}</h4>
                      <p>{project.description}</p>
                    </figcaption>
                  </figure>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      {/* <!--Porfolio Section End--> */}
    </motion.div>
  );
};
export default Portfolio;
