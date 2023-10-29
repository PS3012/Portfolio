import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
import ExpertiseCard from '../../components/ExpertiseCard/ExpertiseCard'
import { expertise } from '../../components/Objects'
import './Expertise.css'

function Expertise() {
    return (
        <>

            <div id="expertise-page">

                <BreadCrumb title="Expertise" />

                <div id="expertise-area">
                    <div className="container">
                        <div className="inner-container">
                            <div className="section-content">
                                <div className="top-content">
                                    <div className="head">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat repellendus quam nostrum vitae ad unde commodi veritatis facilis animi! Amet!
                                    </div>
                                    <div className="text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat modi nam adipisci? Ducimus provident incidunt consequatur odio cumque earum accusamus, omnis, vitae aliquid, repudiandae ex sit quia obcaecati. Obcaecati harum rem magnam quae facilis hic totam, distinctio nesciunt at sed.
                                    </div>
                                </div>
                                {expertise.map((item) => (
                                    <ExpertiseCard
                                        key={item.id}
                                        head={item.head}
                                        text={item.text}
                                        image={item.image}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Expertise
