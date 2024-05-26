import { faGithub, faInstagram, faLinkedinIn, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import "./FixedSocialIcons.css"

function FixedSocialIcons() {
    return (
        <>

            <aside id="fixed-social">
                <div className="text">Stay Connected!</div>
                <div className="line"></div>
                <Link to="https://www.instagram.com/_.piyushsahu/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></Link>
                <Link to="https://www.linkedin.com/in/piyush-sahu-0213b1214/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></Link>
                <Link to="https://wa.me/918765057868" target="_blank"><FontAwesomeIcon icon={faWhatsapp} /></Link>
                <Link to="https://github.com/PS3012" target="_blank"><FontAwesomeIcon icon={faGithub} /></Link>
            </aside>

        </>
    )
}

export default FixedSocialIcons
