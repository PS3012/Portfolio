import { useEffect, useState } from "react";
import "./CustomLoader.css"

function CustomLoader() {
    const [removeLoader, setRemoveLoader] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setRemoveLoader(true);
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, []);
    return (
        <>

            <div id="custom-loader" className={removeLoader ? "remove" : ""}>
                <div className="loader-item">
                    <div>PARENTAL</div>
                    <div>ADVISORY</div>
                    <div>CONTENT</div>
                </div>
            </div>

        </>
    )
}

export default CustomLoader
