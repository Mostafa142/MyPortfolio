import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import './Resume.css'
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
const Resume = () => {
    return (
        <motion.div
            style={pageStyle}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            {/* <!--Resume Section Start--> */}
            <section id="resume" className="resume-section pt-page">
                <div className="section-container">
                    <div className="page-heading">
                        <span className="icon"><FontAwesomeIcon icon={faIdCard} /></span>
                        <h2>My Resume.</h2>
                    </div>

                    {/* <!--Education & Experience Row Start--> */}
                    <div className="row mb-4">

                        <div className="col-lg-6">
                            <div className="subheading">
                                <h3>Education</h3>
                            </div>

                            <ul className="education">

                                {/* <!--Education Item--> */}
                                <li>
                                    <span className="line-left"></span>
                                    <div className="content">
                                        <h4>Computer Science Student</h4>
                                        <h5>Faculty of Computers & Informations, Shibin El-Kom, EGY</h5>
                                        <p className="info">
                                        </p>
                                    </div>
                                    <span className="year">
                                        <span className="to">2019</span>
                                        <span className="from"></span>
                                    </span>
                                </li>

                                {/* <!--Education Item--> */}
                                <li>
                                    <span className="line-left"></span>
                                    <div className="content">
                                        <h4>Web Development</h4>
                                        <h5>Information Technology Institute(ITI), Menofia, EGY</h5>
                                        <p className="info">
                                            Learned HTML5 & CSS3, Bootstrap, ES, JQuery, Client Side Technologies and React
                                        </p>
                                    </div>
                                    <span className="year">
                                        <span className="to">(Jul) 2021</span>
                                        <span className="from">(Sep) 2021</span>
                                    </span>
                                </li>

                            </ul>

                        </div>

                        {/* <!--Experience Column Start--> */}
                        <div className="col-lg-6">

                            <div className="subheading">
                                <h3>Courses </h3>
                            </div>
                            <ul className="experience">

                                {/* <!--Experience Item--> */}
                                <li>
                                    <span className="line-left"></span>
                                    <div className="content">
                                        <h4>JavaScript - The Complete Guide 2022 (Beginner + Advanced)</h4>
                                        <h5>Maximilian (Udemy)</h5>
                                        <p className="info">
                                            Modern JavaScript from the beginning - all the way up to JS expert level! THE must-have JavaScript resource in 2022.
                                        </p>
                                    </div>
                                    <span className="year">
                                        <span className="to">2020</span>
                                        <span className="from">2021</span>
                                    </span>
                                </li>


                                {/* <!--Experience Item--> */}
                                <li>
                                    <span className="line-left"></span>
                                    <div className="content">
                                        <h4>React - The Complete Guide (incl Hooks, React Router, Redux)</h4>
                                        <h5>Maximilian (Udemy)</h5>
                                        <p className="info">
                                            Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!
                                        </p>
                                    </div>
                                    <span className="year">
                                        <span className="to">2020</span>
                                        <span className="from">2021</span>
                                    </span>
                                </li>

                                {/* <!--Experience Item--> */}
                                <li>
                                    <span className="line-left"></span>
                                    <div className="content">
                                        <h4>Frontend Development</h4>
                                        <h5>ElZero Web School</h5>
                                        <p className="info">
                                            HTML, CSS & JS
                                        </p>
                                    </div>
                                    <span className="year">
                                        <span className="to">2020</span>
                                        <span className="from">2021</span>
                                    </span>
                                </li>

                                <li>
                                    <span className="line-left"></span>
                                    <div className="content">
                                        <h4>PHP Development</h4>
                                        <h5>Mahara Tech</h5>
                                        <p className="info">
                                            Buliding Web Applications using PHP & MYSQL
                                        </p>
                                    </div>
                                    <span className="year">
                                        <span className="to">2021</span>
                                        <span className="from">2022</span>
                                    </span>
                                </li>

                            </ul>
                        </div>
                        {/* <!--Experience Column End--> */}

                        {/* <!--Education Column Start--> */}

                        {/* <!--Education Column End--> */}

                    </div>
                    {/* <!--Education & Experience Row End--> */}



                </div>
            </section>
            {/* <!--Resume Section End--> */}
        </motion.div>
    );
}
export default Resume;