import { Link, useLocation } from "react-router-dom"
import './Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

function Footer() {
    const location = useLocation();
    const date = new Date();
    return (
        <>

            {(location.pathname !== "/") ?
                <footer>
                    <div className="container">
                        <div className="inner-container">
                            <div className="section-head">
                                <div className="main-head">
                                    <div>Piyush <span>Sahu</span></div>
                                </div>
                            </div>
                            <div className="section-content">
                                <div className="links">
                                    <Link to="">About</Link>
                                    <Link to="/projects">Projects</Link>
                                    <Link to="">Expertise</Link>
                                    <Link to="">Contact</Link>
                                    <Link to="">Resume</Link>
                                </div>
                                <div className="copyright">
                                    Copyright <FontAwesomeIcon icon={faCopyright} /> {date.getFullYear()}. All Rights Reserved.
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                : null
            }

        </>
    )
}

export default Footer
