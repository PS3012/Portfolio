import 'bootstrap/dist/css/bootstrap.min.css';
import { technologies, whyChoose, works } from '../../components/Objects';
import { Link } from 'react-router-dom';
import ChooseBlock from '../../components/ChooseBlock/ChooseBlock';
import WorkCard from '../../components/WorkCard/WorkCard';
import TechnologyCard from '../../components/TechnologyCard/TechnologyCard';
import ContactForm from '../../components/ContactForm/ContactForm';
import CurvedText from '../../components/TextAnimation/CurvedText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNfcDirectional } from '@fortawesome/free-brands-svg-icons';
import './Explore.css'

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
                                <Link to="/contact" className="curve-text">
                                    <CurvedText
                                        text="HIRE ME * HIRE ME *&nbsp;"
                                        icon={<FontAwesomeIcon icon={faNfcDirectional} />}
                                    />
                                </Link>
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
                        <video muted autoPlay loop className={(window.innerWidth > 576) ? "w-100 h-100" : ""}>
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

                <ContactForm />

            </div>

        </>
    )
}

export default Explore
