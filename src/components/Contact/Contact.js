import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPaperPlane,
  faMapMarkedAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import ContactForm from "./ContactForm";
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
const Contact = () => {
  return (
    <motion.div
      style={pageStyle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      {/* <!--Contact Section Start--> */}
      <section id="contact" className="contact-section pt-page">
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
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <h2>Contact Me.</h2>
          </motion.div>

          {/* <!--Form Row--> */}
          <motion.div className="row mb-5" variants={item}>
            <div className="col-lg-8  offset-lg-2">
              <div className="subheading">
                <h3>Let's Talk</h3>
              </div>

              <ContactForm />
            </div>
          </motion.div>

          {/* <!--Contact Info Row Start--> */}
          <motion.div className="row contact-info mb-5 " variants={item}>
            {/* <!--Contact Info Item--> */}
            <div className="col-md-4 info-item">
              <span className="icon">
                <FontAwesomeIcon icon={faPaperPlane} />
              </span>
              <h5>
                <a href="mailto:example@example.com">
                  mostafafathielsebaey@gmail.com
                </a>
              </h5>
            </div>

            {/* <!--Contact Info Item--> */}
            <div className="col-md-4 info-item">
              <span className="icon">
                <FontAwesomeIcon icon={faMapMarkedAlt} />
              </span>
              <h5>Egypt</h5>
            </div>

            {/* <!--Contact Info Item--> */}
            <div className="col-md-4 info-item mb-5">
              <span className="icon">
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <h5>(+20) 010 669 24393</h5>
            </div>
          </motion.div>
          {/* <!--Contact Info Row End--> */}
        </motion.div>
      </section>
      {/* <!--Contact Section End--> */}
    </motion.div>
  );
};
export default Contact;
