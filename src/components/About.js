import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faLaptop, faEye, faLaptopCode, faBitcoinSign } from '@fortawesome/free-solid-svg-icons';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from "react-owl-carousel";
import './About.css';
import sign from "./Images/Sign.png";
import auth1 from "./Images/author-1.jpg";
import auth2 from "./Images/author-2.jpg";
import auth3 from "./Images/author-3.jpg";
import skill1 from "./Images/pngegg.png";
import skill2 from "./Images/JS.png";
import skill3 from "./Images/bootstrap.png";
import skill4 from "./Images/react.png";
import skill5 from "./Images/jquery.png";
import skill6 from "./Images/TS.png";
import skill7 from "./Images/c++.png";
import skill8 from "./Images/git.png";
import skill9 from "./Images/css.png";

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
const About = () => {
    return (
        <motion.div
            style={pageStyle}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <section id="about" className="about-section pt-page">
                <div className="section-container">
                    {/* page-heading  */}
                    <div className="page-heading">
                        <span className="icon"><FontAwesomeIcon icon={faUserTie} /></span>
                        <h2>About Me.</h2>
                    </div>
                    {/* about info row start */}
                    <div className="row about mb-5">
                        <div className="col-lg-8">
                            {/* Personal Intro*/}
                            <h3 className="mb-4">Full-Stack Developer</h3>
                            <p>Enthusiastic developer with passion for tailored solutions seeking
                                the position of a Full Stack Developer in a thriving, exciting and
                                growing company, where I can utilize my skills to further work towards
                                personal and professional development and contribute towards the prosperity of the organisation.</p>
                            <p>I also a professional
                                goalkeeper and I hope to play for International
                                football leagues such as the English
                                Premier League.
                                My dream is not only for personal goals but also to support my simple family and community.
                                I even have bigger ambitions like supporting and building football academies especially in Africa and worldwide.
                                I would very much like to give support and opportunity to all the budding football talents like me who are looking for one chance to show themselves to the whole world .
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
                                    <li><span className="title">Name</span><span className="value">Mostafa Fathi</span></li>
                                    <li><span className="title">Age</span><span className="value">21 Years</span></li>
                                    <li><span className="title">Residence</span><span className="value">Egypt</span></li>
                                    <li><span className="title">Address</span><span className="value">Menofia,Shibin El-Kom</span></li>
                                    <li><span className="title">Email</span><span className="value">mostafafathi705@gmail.com</span></li>
                                    <li><span className="title">Phone</span><span className="value">(+20) 01066924393</span></li>
                                    <li><span className="title">Freelance</span><span className="value">Available</span></li>
                                </ul>
                                <div className="resume-button mt-5">
                                    <a className="btn-main" target={"_blank"} rel={"noreferrer"} href="https://drive.google.com/file/d/1royEQOdFTOuhWje45l2Ka09mIX5f3KmS/view?usp=sharing">Download Resume</a>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* about info row End */}
                    {/* Services Row Start */}
                    <div className="row services mb-5">
                        <div className="col-md-12">
                            <div className="subheading">
                                <h3>Services</h3>
                            </div>
                        </div>

                        {/* Service Item */}
                        <div className="col-lg-3 col-sm-6">
                            <div className="service-item">
                                <div className="icon"><FontAwesomeIcon icon={faLaptop} /></div>
                                <h4>Web Development</h4>
                                <p>Amet aspernatur delectus maxime ducimus similique Ratione asperiores corporis provident aut libero.</p>
                            </div>
                        </div>

                        {/* Service Item */}
                        <div className="col-lg-3 col-sm-6">
                            <div className="service-item">
                                <div className="icon"><FontAwesomeIcon icon={faEye} /></div>
                                <h4>Web Design</h4>
                                <p>Amet aspernatur delectus maxime ducimus similique Ratione asperiores corporis provident aut libero.</p>
                            </div>
                        </div>

                        {/* Service Item */}
                        <div className="col-lg-3 col-sm-6">
                            <div className="service-item">
                                <div className="icon"><FontAwesomeIcon icon={faLaptopCode} /></div>
                                <h4>Responsive Design</h4>
                                <p>Amet aspernatur delectus maxime ducimus similique Ratione asperiores corporis provident aut libero.</p>
                            </div>
                        </div>

                        {/* Service Item */}
                        <div className="col-lg-3 col-sm-6">
                            <div className="service-item">
                                <div className="icon"><FontAwesomeIcon icon={faBitcoinSign} /></div>
                                <h4>Freelancing</h4>
                                <p>Amet aspernatur delectus maxime ducimus similique Ratione asperiores corporis provident aut libero.</p>
                            </div>
                        </div>
                    </div>
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

                            {/* Client Logo */}
                            <div className="item client-logo">
                                <a href="#" >
                                    <img src={skill1} alt="Client" />
                                </a>
                            </div>
                            {/* Client Logo */}
                            <div className="item client-logo">
                                <a href="#" >
                                    <img src={skill9} alt="Client" />
                                </a>
                            </div>

                            {/* Client Logo */}
                            <div className="item client-logo">
                                <a href="#">
                                    <img src={skill2} alt="Client" />
                                </a>
                            </div>

                            {/* Client Logo */}
                            <div className="item client-logo">
                                <a href="#">
                                    <img src={skill3} alt="Client" />
                                </a>
                            </div>

                            {/* Client Logo */}
                            <div className="item client-logo">
                                <a href="#">
                                    <img src={skill4} alt="Client" />
                                </a>
                            </div>

                            {/* Client Logo */}
                            <div className="item client-logo">
                                <a href="#">
                                    <img src={skill5} alt="Client" />
                                </a>
                            </div>

                            {/* Client Logo */}
                            <div className="item client-logo">
                                <a href="#">
                                    <img src={skill6} alt="Client" />
                                </a>
                            </div>

                            {/* Client Logo */}
                            <div className="item client-logo">
                                <a href="#">
                                    <img src={skill7} alt="Client" />
                                </a>
                            </div>

                            {/* Client Logo */}
                            <div className="item client-logo">
                                <a href="#">
                                    <img src={skill8} alt="Client" />
                                </a>
                            </div>
                        </OwlCarousel>
                    </div>
                    {/* Clients Row End */}
                </div>
            </section>
        </motion.div>
    );
}
export default About;