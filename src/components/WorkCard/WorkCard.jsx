import { Link } from 'react-router-dom'
import './WorkCard.css'

function WorkCard(_props) {
    return (
        <>

            <div className="work-card">
                <div className="image">
                    <img src={_props.image} alt="..." className="w-100 h-100" />
                </div>
                <div className="details">
                    <Link target='_blank' to={_props.link} className="name">{_props.name}</Link>
                    <div className="text">
                        {_props.text}
                    </div>
                </div>
            </div>

        </>
    )
}

export default WorkCard
