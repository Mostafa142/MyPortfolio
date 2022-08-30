import React from "react";
import { motion } from "framer-motion";
import Typical from "react-typical";
import classes from "./Home.module.css";


const pageStyle = {
  overflow: "hidden",
};
const Home = () => {
  return (
    <motion.div
      style={pageStyle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: .5, duration: 1 }}
    >
      {/* Banner Section Start */}
      <section id="home" className={`${classes["banner-section"]} pt-page`}>
        <div id="particles-js"></div>

        <div className={classes["banner-content"]}>
          {/*Banner Text */}
          <h1 className="mb-20">
            Mostafa <span>Fathi</span>
          </h1>

          {/*Animated Text */}
          <div>
            <span>I am a </span>
            <Typical
              className={`${classes["typicalAnimation"]} d-inline`}
              steps={["Front-End Developer", 3000, "Freelancer", 3000]}
              loop={Infinity}
              wrapper="p"
            />
          </div>
        </div>
      </section>
      {/* Banner Section End */}
    </motion.div>
  );
};
export default Home;
