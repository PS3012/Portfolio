import { useState } from 'react'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
import ResumeCard from '../../components/ResumeCard/ResumeCard';
import { education, experience, technologies } from '../../components/Objects';
import TechnologyCard from '../../components/TechnologyCard/TechnologyCard';
import './About.css'
import TextWriting from '../../components/TextAnimation/TextWriting';
import CurvedText from '../../components/TextAnimation/CurvedText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNfcDirectional } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import ContactForm from '../../components/ContactForm/ContactForm';

function About() {
    const [tab, setTab] = useState('education');
    const words = ['Web Designer', 'UI/UX Designer', 'Frontend Developer'];
    return (
        <>

            <div id="about-page">

                <BreadCrumb title="Portfolio" />

                <div id="about-me">
                    <div className="container">
                        <div className="inner-container">
                            <div className="section-content">
                                <div className="inner-grid">
                                    <div className="content-block">
                                        <div className="head">
                                            <div><span>Hello!</span> I am Piyush Sahu</div>
                                            <TextWriting words={words} />
                                        </div>
                                        <div className="content">
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, fugiat, modi eius aspernatur dicta quidem corrupti quas incidunt magnam sequi sunt ab. Ipsam ratione assumenda, voluptatibus deleniti eligendi eveniet quidem ut sed! Quia explicabo reprehenderit commodi, adipisci optio, perspiciatis nulla ratione non, pariatur iure quasi. Quo nesciunt corrupti enim in!
                                        </div>
                                        <div className="redirect">
                                            <Link to="/contact">
                                                <CurvedText
                                                    text="HIRE ME * HIRE ME *&nbsp;"
                                                    icon={<FontAwesomeIcon icon={faNfcDirectional} />}
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="image">
                                        <img src="/explore/about.jpg" alt="..." className="w-100 h-100" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="more-about-me">
                    <div className="container">
                        <div className="inner-container">
                            <div className="section-head">
                                <div className="main-head">
                                    <div>Lorem <span>ipsum</span> dolor.</div>
                                </div>
                            </div>
                            <div className="section-content">
                                <div className="content">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque inventore voluptates dolorem, dolores aspernatur dolore fuga delectus nostrum dicta id saepe dolorum quia ut, qui est facere. Eum, minima error? Perferendis vero porro quas quasi ipsum quia reprehenderit facilis, saepe quaerat. Alias beatae quia temporibus debitis hic nemo soluta cumque corrupti, rem numquam, voluptatum magnam dolores saepe placeat. Iste ipsum totam, quisquam alias ullam nostrum cum tempora dolor culpa deserunt. Est, ab? Animi commodi reprehenderit fugit suscipit cum. Necessitatibus impedit excepturi reiciendis dolor ea in odit sapiente sed obcaecati ratione, odio modi mollitia sunt iusto nam cupiditate nobis dolore sequi.
                                </div>
                                <div className="btn-block">
                                    <Link className="box-button"><span>Get Resume</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="my-resume">
                    <div className="container">
                        <div className="inner-container">
                            <div className="section-head">
                                <div className="main-head">
                                    <div>My <span>Resume</span></div>
                                </div>
                            </div>
                            <div className="section-content">
                                <div className="resume-tabs">
                                    <div className="tab-btn">
                                        <button onClick={() => setTab('education')} className={tab === 'education' && "active"}>
                                            Education
                                        </button>
                                        <button onClick={() => setTab('skill')} className={tab === 'skill' && "active"}>
                                            Skills
                                        </button>
                                        <button onClick={() => setTab('experience')} className={tab === 'experience' && "active"}>
                                            Experience
                                        </button>
                                    </div>
                                    <div className="tab-content">
                                        {tab === 'education' ?
                                            <div>
                                                {education.map((item) => (
                                                    <ResumeCard
                                                        key={item.id}
                                                        title={item.title}
                                                        time={item.time}
                                                        text={item.text}
                                                    />
                                                ))}
                                            </div>
                                            : null
                                        }
                                        {tab === 'skill' ?
                                            <div className="skill-grid">
                                                {technologies.map((item) => (
                                                    <TechnologyCard
                                                        key={item.id}
                                                        icon={item.icon}
                                                        name={item.name}
                                                    />
                                                ))}
                                            </div>
                                            : null
                                        }
                                        {tab === 'experience' ?
                                            <div>
                                                {experience.map((item) => (
                                                    <ResumeCard
                                                        key={item.id}
                                                        title={item.title}
                                                        time={item.time}
                                                        text={item.text}
                                                    />
                                                ))}
                                            </div>
                                            : null
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <ContactForm />

            </div>

        </>
    )
}

export default About
