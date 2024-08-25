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
            <section id="head-container">
                <div className="section-content">
                    <div className="top-container">
                        <div className="container-fluid">
                            <div className="top-content">
                                <div className="text">
                                    <span>Innovative</span> Design and <span>Flawless Development</span> Solutions.
                                </div>
                                <div className="btn-bar">
                                    <a href="/Piyush-Sahu-Resume.pdf" download className="action-btn"><FontAwesomeIcon icon={faDownload} />&nbsp; My Resume</a>
                                    <Link to="/explore" className="action-btn"><FontAwesomeIcon icon={faWpexplorer} />&nbsp; Explore</Link>
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
