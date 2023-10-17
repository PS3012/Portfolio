import { useEffect, useState } from "react";
import "./CustomLoader.css"

function CustomLoader() {
    const [displayLoader, setDisplayLoader] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDisplayLoader(false);
        }, 3500);

        return () => clearTimeout(timer); // Cleanup timer on component unmount
    }, []);
    return (
        <>

            {displayLoader &&
                <div id="custom-loader">
                    <div className="loader-bg">
                        <div>&nbsp;</div>
                        <div>&nbsp;</div>
                        <div>&nbsp;</div>
                        <div>&nbsp;</div>
                        <div>&nbsp;</div>
                        <div>&nbsp;</div>
                    </div>
                </div>
            }

        </>
    )
}

export default CustomLoader
