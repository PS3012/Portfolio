import './ExpertiseCard.css'

function ExpertiseCard(_props) {
    return (
        <>

            <div className="image-content">
                <div className="content">
                    <div className="head">{_props.head}</div>
                    <div className="text">{_props.text}</div>
                </div>
                <div className="image">
                    <img src={_props.image} alt="..." className="w-100 h-100" />
                </div>
            </div>

        </>
    )
}

export default ExpertiseCard
