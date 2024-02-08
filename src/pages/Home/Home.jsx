import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faWpexplorer } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>

            {/* ========================================================== */}
            {/* HOME CONTAINER */}
            {/* ========================================================== */}
            <section id="head-container" style={{ backgroundImage: "url(" + "/body-bg.jpg" + ")" }}>
                <div className="section-content">
                    <div className="top-container">
                        <div className="container">
                            <div className="top-content">
                                <div className="text">
                                    Elevating <span>Digital</span> Presence with <span>Innovative</span> Design and <span>Flawless Development</span> Solutions.
                                </div>
                                <div className="btn-bar">
                                    <a href="/Piyush-Sahu-Resume.pdf" download className="action-btn"><FontAwesomeIcon icon={faDownload} />&nbsp; My Resume</a>
                                    <Link to="/explore" className="action-btn"><FontAwesomeIcon icon={faWpexplorer} />&nbsp; Explore</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-container">
                        <div className="container-fluid">
                            <div className="bottom-content">
                                <div className="contact">
                                    <div className="block">
                                        <strong>EMail : </strong>
                                        <a href="mailto:pyushsahud123@gmail.com">pyushsahud123@gmail.com</a>
                                    </div>
                                    <div className="block">
                                        <strong>Tel : </strong>
                                        <a href="tel:+918765057868">+91 8765057868</a>
                                    </div>
                                </div>
                                <div className="about">
                                    Welcome to my digital space! I&lsquo;m a dynamic web developer and designer passionate 
                                    about transforming concepts into captivating digital experiences. My approach merges 
                                    technical precision with creative flair, ensuring each project reflects innovation and 
                                    functionality. Join me on a journey where every line of code tells a story, and design 
                                    meets excellence. Let&lsquo;s create a digital narrative that leaves a lasting impact.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Home
