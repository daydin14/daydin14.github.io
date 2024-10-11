// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Constants
import MapDetails from '../../constants/MapDetails';

const GmapEmbeded = ({ width, height }) => {
    let src = `https://www.google.com/maps/embed/v1/place?key=${MapDetails.MapApiKey}&q=${MapDetails.MapDefaultDestination}`;

    return (
        <iframe
            width={width || '100%'}
            height={height}
            title={MapDetails.MapTitle}
            src={src}
            frameBorder="0"
            allowFullScreen
        >
        </iframe>
    );
};

GmapEmbeded.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string.isRequired,
};

export default GmapEmbeded