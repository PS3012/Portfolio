import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Header.css'

function Header() {
    const location = useLocation();
    const [headerBg, setHeaderBg] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setHeaderBg(true);
            } else {
                setHeaderBg(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>

            {/* ========================================================== */}
            {/* HEADER */}
            {/* ========================================================== */}
            <header className={headerBg ? "bgHeader" : ""}>
                <div className="top-block">
                    <div className="container-fluid">
                        <div className="inner-grid">

                            {/* LOGO */}
                            <Link to="/" className="logo">
                                <div className="head">
                                    <div>&lt; PIYUSH /&gt;</div>
                                </div>
                                <div className="slogan">Crafting Experiences!</div>
                            </Link>

                            {/* LINKS */}
                            <div className="link-block">
                                <Link to="/explore" className={location.pathname === "/explore" ? "active" : ""}>
                                    Explore
                                </Link>
                                <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
                                    About
                                </Link>
                                <Link to="/expertise" className={location.pathname === "/expertise" ? "active" : ""}>
                                    Expertise
                                </Link>
                                <Link to="/projects" className={location.pathname === "/projects" ? "active" : ""}>
                                    Projects
                                </Link>
                                <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Header
