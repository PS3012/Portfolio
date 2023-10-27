import './ChooseBlock.css'

function ChooseBlock( _props ) {
    const imageOrder = _props.alignment === "left" ? 1 : 2;
    const contentOrder =  _props.alignment === "left" ? 2 : 1;
    return (
        <>

            <div className="choose-block">
                <div className="image" style={{ order: imageOrder }}>
                    <img src={_props.image} alt="..." className="w-100 h-100" />
                </div>
                <div className="details" style={{ textAlign: _props.alignment, order: contentOrder }}>
                    <div className="head">
                        {_props.title}
                    </div>
                    <div className="content">
                        {_props.content}
                    </div>
                </div>
            </div>

        </>
    )
}

export default ChooseBlock
