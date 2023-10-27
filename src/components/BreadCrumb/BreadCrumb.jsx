import './BreadCrumb.css'

function BreadCrumb(_props) {
    return (
        <>

            <div id="custom-bread">
                <div className="container">
                    <div className="section-content">
                        <div className="bg-text">
                            <div>PS</div>
                        </div>
                        <div className="overlay-text">
                            <div className="top">Piyush Sahu</div>
                            <div className="middle">{_props.title}</div>
                            <div className="bottom">Creative Designer!</div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default BreadCrumb
