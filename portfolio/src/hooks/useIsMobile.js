// Dependencies
import { useState, useEffect } from 'react';

const useIsMobile = (breakpoint = 768) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);
    const [isPortrait, setIsPortrait] = useState(window.innerHeight > window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            const newIsMobile = window.innerWidth <= breakpoint;
            const newIsPortrait = window.innerHeight > window.innerWidth;
            if (newIsMobile !== isMobile) {
                setIsMobile(newIsMobile);
            }
            if (newIsPortrait !== isPortrait) {
                setIsPortrait(newIsPortrait);
            }
        };

        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [breakpoint, isMobile, isPortrait]);

    return { isMobile, isPortrait };
};

export default useIsMobile;