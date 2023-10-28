import './TechnologyCard.css'

function TechnologyCard(_props) {
    return (
        <>

            <div className="technology-card">
                <div className="icon">{_props.icon}</div>
                <div className="name">{_props.name}</div>
            </div>

        </>
    )
}

export default TechnologyCard
