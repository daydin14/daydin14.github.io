// Dependencies
import { useEffect } from 'react';

const FontAwesomeScript = () => {
    useEffect(() => {
        const appendScript = () => {
            const fontAwesomeKitId = process.env.REACT_APP_FONT_AWESOME_KIT_ID;
            if (!fontAwesomeKitId) {
                console.error('Font Awesome Kit ID is not defined');
                return;
            }

            const script = document.createElement('script');
            script.src = `https://kit.fontawesome.com/${fontAwesomeKitId}.js`;
            script.crossOrigin = 'anonymous';
            script.async = true;

            if (document.body) {
                document.body.appendChild(script);
            } else {
                console.error('document.body is not available');
            }

            return () => {
                if (document.body) {
                    document.body.removeChild(script);
                }
            };
        };

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', appendScript);
        } else {
            appendScript();
        }

        return () => {
            document.removeEventListener('DOMContentLoaded', appendScript);
        };
    }, []);

    return null;
};

export default FontAwesomeScript