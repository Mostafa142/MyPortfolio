import React from "react";
import { motion } from "framer-motion";
import Typical from 'react-typical'
import './Home.css';
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
    overflow: "hidden"

};
const Home = () => {

    return (
        <motion.div
            style={pageStyle}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            {/* Banner Section Start */}
            <section id="home" className=" banner-section pt-page ">
                <div id="particles-js"></div>

                <div className="banner-content">
                    {/*Banner Text */}
                    <h1 className="mb-20">Mostafa <span>Fathi</span></h1>

                    {/*Animated Text */}
                    <p>
                        <span>I am a </span>
                        <Typical
                            className=" d-inline typicalAnimation"
                            steps={['Front-End Developer', 3000, 'Freelancer', 3000]}
                            loop={Infinity}
                            wrapper="p"
                        />
                    </p>

                </div>

            </section>
            {/* Banner Section End */}
        </motion.div >
    );
}
export default Home;