import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faWpexplorer } from '@fortawesome/free-brands-svg-icons';
import TextWritingEffect from '../../components/TextWritingEffect';
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
                        <div className="container">
                            <div className="top-content">
                                <div className="text">Lorem ipsum <span>dolor sit</span> amet consectetur adipisicing elit <span>adipisicing</span> elit consectetur adipisicing.</div>
                                <div className="btn-bar">
                                    <a href="#" download className="action-btn"><FontAwesomeIcon icon={faDownload} />&nbsp; My Resume</a>
                                    <Link to="" className="action-btn"><FontAwesomeIcon icon={faWpexplorer} />&nbsp; Explore Projects</Link>
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
                                    <TextWritingEffect text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos eius, consequatur quod libero reprehenderit veritatis recusandae cupiditate rerum distinctio facere." />
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
