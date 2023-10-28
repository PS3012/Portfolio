import 'bootstrap/dist/css/bootstrap.min.css';
import { technologies, whyChoose, works } from '../../components/Objects';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import './Explore.css'
import ChooseBlock from '../../components/ChooseBlock/ChooseBlock';
import WorkCard from '../../components/WorkCard/WorkCard';
import TechnologyCard from '../../components/TechnologyCard/TechnologyCard';

function Explore() {
    return (
        <>

            <div id="explore-page">

                <div id="main-section">
                    <div className="container">
                        <div className="section-content">
                            <div className="top-text">
                                <div>Lorem</div>
                                <div className='image'>
                                    <img src="/explore/code.jpg" alt="..." className="w-100" />
                                </div>
                                <div>Lorem</div>
                            </div>
                            <div className="mid-text">
                                <div className="title">Lorem</div>
                                <div className='image'>
                                    <img src="/explore/code-2.jpg" alt="..." className="w-100" />
                                </div>
                                <div className="content">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, ab saepe aut maiores cumque exercitationem cum placeat ducimus impedit voluptate ad adipisci error tempore autem minus, quibusdam molestias repellendus repudiandae?
                                </div>
                            </div>
                            <div className="bottom-text">
                                <div>UI/UX Designer!</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="my-works">
                    <div className="container">
                        <div className="inner-container">
                            <div className="section-head">
                                <div className="main-head">
                                    My <span>Works</span>
                                </div>
                            </div>
                            <div className="section-content">
                                <div className="work-grid">
                                    {works.map((item, index) => index < 2 && (
                                        <WorkCard
                                            key={item.id}
                                            image={item.image}
                                            link={item.link}
                                            name={item.name}
                                            text={item.text}
                                        />
                                    ))}
                                </div>
                                <div className="btn-area">
                                    <Link to="/projects" className="box-button"><span>View More</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="futuristic">
                    <div className="video-bg">
                        <video muted autoPlay loop className="w-100 h-100">
                            <source src="/explore/future.mp4" />
                        </video>
                    </div>
                    <div className="content-container">
                        <div className="container-fluid">
                            <div className="section-content">
                                <div className="content-box">
                                    <div className="head">
                                        Lorem ipsum <span>dolor</span> sit amet <span>consectetur</span> adipisicing.
                                    </div>
                                    <div className="details">
                                        <div>
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta eveniet sunt excepturi non, incidunt dolor commodi suscipit mollitia minus numquam perferendis eos. Sequi modi nostrum accusamus culpa suscipit illum tempore, numquam eos! Quam, veritatis harum magnam incidunt cupiditate unde vel.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="technologies">
                    <div className="container">
                        <div className="inner-container">
                            <div className="section-head">
                                <div className="main-head">
                                    My <span>Toolbox</span>
                                </div>
                            </div>
                            <div className="section-content">
                                <div className="tech-grid">
                                    {technologies.map((item) => (
                                        <TechnologyCard
                                            key={item.id}
                                            icon={item.icon}
                                            name={item.name}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="why-choose">
                    {whyChoose.map((item) => (
                        <ChooseBlock
                            key={item.id}
                            alignment={item.alignment}
                            image={item.image}
                            title={item.title}
                            content={item.text}
                        />
                    ))}
                </div>

                <div id="contact-me">
                    <div className="container">
                        <div className="inner-container">
                            <div className="section-head">
                                <div className="main-head">
                                    <div>Let&lsquo;s Build Something</div>
                                    <div><span>Great Together.</span></div>
                                </div>
                            </div>
                            <div className="section-content">
                                <div className="inner-grid">
                                    <div className="form-block">
                                        <div className="group-input">
                                            <label htmlFor="name">Name</label>
                                            <input type="text" name="name" />
                                        </div>
                                        <div className="group-input">
                                            <label htmlFor="number">Contact Number</label>
                                            <input type="number" name="number" />
                                        </div>
                                        <div className="group-input">
                                            <label htmlFor="email">E-Mail</label>
                                            <input type="email" name="email" />
                                        </div>
                                        <div className="group-input">
                                            <label htmlFor="message">Message</label>
                                            <textarea name="message"></textarea>
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <button className="box-button">
                                                <span>Send Message</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="detail-block">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faEnvelopeOpenText} />
                                        </div>
                                        <div className="block">
                                            <div>+91 8765057868</div>
                                        </div>
                                        <div className="block">
                                            <div>pyushsahud123@gmail.com</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Explore
