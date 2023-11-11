import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Header.css'

function Header() {
    const location = useLocation();
    const [headerBg, setHeaderBg] = useState(false);
    const [links, setLinks] = useState(window.innerWidth >= 768);

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

    useEffect(() => {
        const handleResize = () => {
            setLinks(window.innerWidth >= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleClick = () => {
        if (window.innerWidth < 768) {
            setLinks(false);
        }
    };

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

                            {links &&
                                // {/* LINKS */ }
                                <div className="link-block">
                                    <Link to="/explore" onClick={handleClick} className={location.pathname === "/explore" ? "active" : ""}>
                                        Explore
                                    </Link>
                                    <Link to="/about" onClick={handleClick} className={location.pathname === "/about" ? "active" : ""}>
                                        About
                                    </Link>
                                    <Link to="/expertise" onClick={handleClick} className={location.pathname === "/expertise" ? "active" : ""}>
                                        Expertise
                                    </Link>
                                    <Link to="/projects" onClick={handleClick} className={location.pathname === "/projects" ? "active" : ""}>
                                        Projects
                                    </Link>
                                    <Link to="/contact" onClick={handleClick} className={location.pathname === "/contact" ? "active" : ""}>
                                        Contact
                                    </Link>
                                    <div className="close-btn" onClick={() => setLinks(false)}>
                                        <svg width="48" height="48" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="#ffffff" d="m11.4 12.788l2.1-2.1l2.1 2.1l.688-.688l-2.1-2.1l2.1-2.1l-.688-.688l-2.1 2.1l-2.1-2.1l-.688.688l2.1 2.1l-2.1 2.1l.688.688ZM6.5 17V3h14v14h-14Zm-3 3V6.615h1V19h12.385v1H3.5Z" />
                                        </svg>
                                    </div>
                                </div>
                            }

                            {/* MOBILE MENU BUTTON */}
                            <div className="mobile-menu-btn" onClick={() => setLinks(true)}>
                                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#ffffff" fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                                </svg>
                            </div>

                        </div>
                    </div>
                </div>
            </header >

        </>
    )
}

export default Header
