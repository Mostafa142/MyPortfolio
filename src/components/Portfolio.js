import { motion } from "framer-motion";
import './Portfolio.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import Img1 from './Images/img-1.jpg';
import Img2 from './Images/img-2.jpg';
import Img3 from './Images/img-3.jpg';
import Img4 from './Images/img-4.jpg';
// import Img5 from './Images/img-5.jpg';
// import Img6 from './Images/img-6.jpg';
// import Img7 from './Images/img-7.jpg';
// import Img8 from './Images/img-8.jpg';
// import Img9 from './Images/img-9.jpg';
// import Img10 from './Images/img-10.jpg';
// import Img11 from './Images/img-11.jpg';
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
const Portfolio = () => {
    return (
        <motion.div
            style={pageStyle}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            {/* <<!--Porfolio Section Start--> */}
            <section id="portfolio" className="portfolio-section pt-page">
                <div className="section-container">

                    {/* <!--Page Heading--> */}
                    <div className="page-heading">
                        <span className="icon"><FontAwesomeIcon icon={faBriefcase} /></span>
                        <h2>Portfolio.</h2>
                    </div>

                    <div className="row">
                        {/* <!--Portfolio Filter--> */}
                        <div className="col-md-12">
                            <div className="subheading">
                                <h3>My Projects</h3>
                            </div>
                        </div>
                    </div>

                    {/* <!--Portfolio Items--> */}
                    <div className="row portfolio-items mb-5 ">

                        {/* <!--Portfolio Item--> */}
                        <div className="item col-lg-6 col-sm-8">
                            <a className="image-link" href="https://mostafa142.github.io/React-First-Project-/" target={"_blank"} rel={"noreferrer"}>
                                <figure>
                                    <img src={Img1} alt="" />
                                    <figcaption>
                                        <h4>Sports Store</h4>
                                        <p>React js</p>
                                    </figcaption>
                                </figure>
                            </a>
                        </div>

                        {/* <!--Portfolio Item--> */}
                        <div className="item col-lg-6  col-sm-8 ">
                            <a className="ajax-link" href="https://mostafa142.github.io/Guage-Engineering-Consultants/" target={"_blank"} rel={"noreferrer"}>
                                <figure>
                                    <img src={Img3} alt="" />
                                    <figcaption>
                                        <h4>Gauge Engineering</h4>
                                        <p>Html,Css,JS</p>
                                    </figcaption>
                                </figure>
                            </a>
                        </div>

                        <div className="item col-lg-6 col-sm-8">
                            <a className="ajax-link" href="https://mostafa142.github.io/Life-Of-Giving/" target={"_blank"} rel={"noreferrer"}>
                                <figure>
                                    <img src={Img2} alt="" />
                                    <figcaption>
                                        <h4>Life Of Giving</h4>
                                        <p>React</p>
                                    </figcaption>
                                </figure>
                            </a>
                        </div>
                        <div className="item col-lg-6 col-sm-8 design text center">
                            <a className="ajax-link" href="https://mostafa142.github.io/International-school-system/" target={"_blank"} rel={"noreferrer"}>
                                <figure>
                                    <img src={Img4} alt="" />
                                    <figcaption>
                                        <h4>International School System</h4>
                                        <p>Html,Css,JS</p>
                                    </figcaption>
                                </figure>
                            </a>
                        </div>

                    </div>
                </div>
            </section>
            {/* <!--Porfolio Section End--> */}
        </motion.div>
    );
}
export default Portfolio;