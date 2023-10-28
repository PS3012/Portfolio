import { useEffect, useState } from "react";
import RotatingText from 'react-rotating-text';

function TextWriting(_props) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % _props.words.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [_props.words.length]);
    return (
        <>

            <RotatingText
                items={_props.words}
                item={_props.words[index]}
                typingInterval={100}
                deletingInterval={100}
            />

        </>
    )
}

export default TextWriting
