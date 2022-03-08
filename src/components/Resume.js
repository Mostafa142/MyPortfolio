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

                        {/* <!--Experience Column Start--> */}
                        <div className="col-lg-6">
                            <div className="subheading">
                                <h3>Experience</h3>
                            </div>
                            <ul className="experience">

                                {/* <!--Experience Item--> */}
                                <li>
                                    <span className="line-left"></span>
                                    <div className="content">
                                        <h4>Lead UI Designer</h4>
                                        <h5>Big Design Company, NY, USA</h5>
                                        <p className="info">
                                            Sit cupiditate praesentium ex esse nulla Facere fuga perspiciatis eveniet provident neque Ea ratione non minus temporibus ipsum Sunt minima
                                        </p>
                                    </div>
                                    <span className="year">
                                        <span className="to">2018</span>
                                        <span className="from">2016</span>
                                    </span>
                                </li>

                                {/* <!--Experience Item--> */}
                                <li>
                                    <span className="line-left"></span>
                                    <div className="content">
                                        <h4>Web Designer</h4>
                                        <h5>Design Company, London, UK</h5>
                                        <p className="info">
                                            Dolor id atque accusantium ut impedit odit provident soluta voluptatem Veritatis ipsam neque mollitia vero suscipit a laborum doloremque. Ipsa!
                                        </p>
                                    </div>
                                    <span className="year">
                                        <span className="to">2016</span>
                                        <span className="from">2015</span>
                                    </span>
                                </li>

                                {/* <!--Experience Item--> */}
                                <li>
                                    <span className="line-left"></span>
                                    <div className="content">
                                        <h4>Web Developer</h4>
                                        <h5>Exis Development, London, UK</h5>
                                        <p className="info">
                                            Consectetur pariatur fugiat ipsam aperiam maiores. Nisi in dignissimos debitis expedita asperiores delectus vitae corporis.
                                        </p>
                                    </div>
                                    <span className="year">
                                        <span className="to">2015</span>
                                        <span className="from">2014</span>
                                    </span>
                                </li>

                            </ul>
                        </div>
                        {/* <!--Experience Column End--> */}

                        {/* <!--Education Column Start--> */}
                        <div className="col-lg-6">
                            <div className="subheading">
                                <h3>Education</h3>
                            </div>

                            <ul className="education">

                                {/* <!--Education Item--> */}
                                <li>
                                    <span className="line-left"></span>
                                    <div className="content">
                                        <h4>MA Graphics</h4>
                                        <h5>Royal College of Art, London, UK</h5>
                                        <p className="info">
                                            Consectetur mollitia amet inventore nisi sed. Provident veritatis exercitationem eum doloremque itaque expedita? Ex voluptatem nostrum numquam illum.
                                        </p>
                                    </div>
                                    <span className="year">
                                        <span className="to">2014</span>
                                        <span className="from">2013</span>
                                    </span>
                                </li>

                                {/* <!--Education Item--> */}
                                <li>
                                    <span className="line-left"></span>
                                    <div className="content">
                                        <h4>BA(HONS) Graphics</h4>
                                        <h5>Central Saint Martins, London, UK</h5>
                                        <p className="info">
                                            Elit voluptatibus quas necessitatibus ullam tenetur provident voluptatibus. Ratione delectus lorem minus ipsa architecto. Saepe officiis sint adipisci.
                                        </p>
                                    </div>
                                    <span className="year">
                                        <span className="to">2013</span>
                                        <span className="from">2012</span>
                                    </span>
                                </li>

                                {/* <!--Education Item--> */}
                                <li>
                                    <span className="line-left"></span>
                                    <div className="content">
                                        <h4>Web & Graphics Diploma</h4>
                                        <h5>Tech Arts Institute, CA, USA</h5>
                                        <p className="info">
                                            Ipsum ex exercitationem est aliquid eos saepe. Dolorum aperiam cupiditate labore vero deleniti Aut unde deserunt neque voluptas.
                                        </p>
                                    </div>
                                    <span className="year">
                                        <span className="to">2012</span>
                                        <span className="from">2011</span>
                                    </span>
                                </li>

                            </ul>
                        </div>
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