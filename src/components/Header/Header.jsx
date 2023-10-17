import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>

            {/* ========================================================== */}
            {/* HEADER */}
            {/* ========================================================== */}
            <header>
                <div className="top-block">
                    <div className="container-fluid">
                        <div className="inner-grid">

                            {/* LOGO */}
                            <div className="logo">
                                <div className="head">
                                    <div>&lt; PIYUSH /&gt;</div>
                                </div>
                                <div className="slogan">Crafting Experiences!</div>
                            </div>

                            {/* LINKS */}
                            <div className="link-block">
                                <Link to="">About</Link>
                                <Link to="">Expertise</Link>
                                <Link to="">Projects</Link>
                                <Link to="">Contact</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Header
