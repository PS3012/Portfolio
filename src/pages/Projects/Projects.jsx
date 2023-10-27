import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
import { works } from '../../components/Objects'
import WorkCard from '../../components/WorkCard/WorkCard'
import './Projects.css'

function Projects() {
    return (
        <>

            <div id="projects-page">

                <BreadCrumb title="Projects" />

                <div id="projects-area">
                    <div className="container">
                        <div className="inner-container">
                            <div className="section-content">
                                <div className="project-grid">
                                    {works.map((item, index) => index < 4 && (
                                        <WorkCard
                                            key={item.id}
                                            image={item.image}
                                            link={item.link}
                                            name={item.name}
                                            text={item.text}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Projects
