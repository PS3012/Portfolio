import './ResumeCard.css'

function ResumeCard( _props ) {
    return (
        <>

            <div className="resume-card">
                <div className="vertical-line"></div>
                <div className="disc"></div>
                <div className="horizontal-line"></div>
                <div className="main-card">
                    <div className="title">{_props.title}</div>
                    <div className="time">{_props.time}</div>
                    <div className="content">{_props.text}</div>
                </div>
            </div>

        </>
    )
}

export default ResumeCard
