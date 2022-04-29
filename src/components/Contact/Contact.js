import React from 'react'; import { motion } from "framer-motion";
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPaperPlane, faMapMarkedAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
const pageVariants = {
    initial: {
        opacity: 0,
        x: "0vw",
        scale: 0.8
    },
    in: {
        opacity: 1,
        x: 0,
        scale: 1
    },
    out: {
        opacity: 0,
        x: "0vw",
        scale: 1.2
    }
};
const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 1
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
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            {/* <!--Contact Section Start--> */}
            <section id="contact" className="contact-section pt-page">
                <div className="section-container">

                    {/* <!--Page Heading--> */}
                    <div className="page-heading">
                        <span className="icon"><FontAwesomeIcon icon={faEnvelope} /></span>
                        <h2>Contact Me.</h2>
                    </div>

                    {/* <!--Form Row--> */}
                    <div className="row mb-5">
                        <div className="col-lg-8  offset-lg-2">
                            <div className="subheading">
                                <h3>Let's Talk</h3>
                            </div>

                            {/* <!--Form Start--> */}
                            <form id="contact-form" >
                                <div className="row">


                                    {/* <!--Name Field--> */}
                                    <div className="col-md-6 mb-5">
                                        <span className="input">
                                            <input className="input__field cf-validate" type="text" name="from_name" id="from_name" />
                                            <label className="input__label" htmlFor="cf-name">Name</label>
                                        </span>
                                    </div>

                                    {/* <!--Email Field--> */}
                                    <div className="col-md-6 mb-5">
                                        <span className="input">
                                            <input className="input__field cf-validate" type="text" name="email" id="email" />
                                            <label className="input__label" htmlFor="cf-email">Email</label>
                                        </span>
                                    </div>

                                    {/* <!--Message Box--> */}
                                    <div className="col-md-12 mb-5">
                                        <span className="input">
                                            <textarea className="input__field cf-validate" name="message" id="message" rows="5" ></textarea>
                                            <label className="input__label" htmlFor="cf-message">How can we help you?</label>
                                        </span>
                                    </div>

                                    <div className="alert-container col-md-12"></div>

                                    {/* <!--Submit Button--> */}
                                    <div className="col-md-12 text-center">
                                        <button type="submit" id="button" value="Send Email" className="btn-main">Send Message</button>
                                    </div>


                                </div>
                            </form>
                            {/* <!--Form End--> */}

                        </div>
                    </div>

                    {/* <!--Contact Info Row Start--> */}
                    <div className="row contact-info mb-5 ">

                        {/* <!--Contact Info Item--> */}
                        <div className="col-md-4 info-item">
                            <span className="icon"><FontAwesomeIcon icon={faPaperPlane} /></span>
                            <h5><a href="mailto:example@example.com">mostafafathielsebaey@gmail.com</a></h5>
                        </div>

                        {/* <!--Contact Info Item--> */}
                        <div className="col-md-4 info-item">
                            <span className="icon"><FontAwesomeIcon icon={faMapMarkedAlt} /></span>
                            <h5>Egypt</h5>
                        </div>

                        {/* <!--Contact Info Item--> */}
                        <div className="col-md-4 info-item mb-5">
                            <span className="icon"><FontAwesomeIcon icon={faPhone} /></span>
                            <h5>(+20) 010 669 24393</h5>
                        </div>

                    </div>
                    {/* <!--Contact Info Row End--> */}

                </div>
            </section>
            {/* <!--Contact Section End--> */}


        </motion.div>
    );
}
export default Contact;