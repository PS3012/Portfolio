/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

const TextWritingEffect = ({ text }) => {
    const [displayText, setDisplayText] = useState('');
    const [typing, setTyping] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            if (typing) {
                setDisplayText((prevText) => {
                    if (prevText === text) {
                        setTyping(false);
                        return prevText;
                    } else {
                        return prevText + text[prevText.length];                    }
                });
            } else {
                setDisplayText((prevText) => {
                    if (prevText === '') {
                        setTyping(true);
                    }
                    return prevText.slice(0, -1);
                });
            }
        }, 50);

        return () => clearInterval(interval);
    }, [text, typing]);

    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: displayText }}></div>
        </div>
    );
};

export default TextWritingEffect;
