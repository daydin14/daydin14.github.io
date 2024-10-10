// Dependencies
import ReactGA from 'react-ga4';

/**
 * Initializes Google Analytics with the provided Google Tag ID from environment variables.
 * 
 * @function
 * @name initGA
 * @returns {void}
 * @description This function retrieves the Google Tag ID from the environment variables and initializes Google Analytics using the ReactGA library. If the Google Tag ID is not defined, it logs an error message to the console.
 * @example
 * // Ensure REACT_APP_GOOGLE_TAG_ID is set in your environment variables
 * initGA();
 */
export const initGA = () => {
    const googleTagId = process.env.REACT_APP_GOOGLE_TAG_ID;
    if (!googleTagId) {
        console.error('Google Tag ID is not defined in the environment variables');
        return;
    }
    ReactGA.initialize(googleTagId);
};

/**
 * Logs a page view to Google Analytics.
 * 
 * This function sends a pageview hit to Google Analytics using the current
 * window location's pathname and search parameters.
 * 
 * @function logPageView
 * @memberof module:utils/GoogleAnalytics
 */
export const logPageView = () => {
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search });
};

/**
 * Logs an event to Google Analytics.
 *
 * @param {string} category - The category of the event.
 * @param {string} action - The action of the event.
 * @param {string} label - The label of the event.
 */
export const logEvent = (category, action, label) => {
    ReactGA.event({
        category: category,
        action: action,
        label: label,
    });
};

/**
 * Logs a timing event to Google Analytics.
 *
 * @param {string} category - The category of the event.
 * @param {string} variable - The variable name of the event.
 * @param {number} value - The value of the event.
 * @param {string} [label] - An optional label for the event.
 *
 * @example
 * logTiming('Video', 'Load Time', 2000, 'Home Page Video');
 */
export const logTiming = (category, variable, value, label) => {
    ReactGA.event({
        category: category,
        action: variable,
        value: value,
        label: label,
    });
};

// Assign object to a variable before exporting as module default
const Ganalytics = {
    initGA,
    logPageView,
    logEvent,
    logTiming,
};

export default Ganalytics;