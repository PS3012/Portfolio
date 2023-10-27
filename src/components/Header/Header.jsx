import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Header() {
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
                                <Link to="/explore">Explore</Link>
                                <Link to="/about">About</Link>
                                <Link to="/expertise">Expertise</Link>
                                <Link to="/projects">Projects</Link>
                                <Link to="/contact">Contact</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Header
