import React, { useEffect } from 'react';

const FontAwesomeScript = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://kit.fontawesome.com/${process.env.REACT_APP_FONT_AWESOME_KIT_ID}.js`;
        script.crossOrigin = 'anonymous';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <></>
    );
};

export default FontAwesomeScript;