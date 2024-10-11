import React from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const GoogleTagManager = ({ gtmId }) => {
    if (!gtmId) {
        console.error('Google Tag Manager ID is not defined');
        return null;
    }

    return (
        <HelmetProvider>
            <Helmet>
                {/* Google Tag Manager */}
                <script title="Google Tag Manager">
                    {`
                        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','${gtmId}');
                    `}
                </script>
                {/* End Google Tag Manager */}
            </Helmet>
            {/* Google Tag Manager (noscript) */}
            <noscript>
                <iframe
                    src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
                    height="0"
                    width="0"
                    style={{ display: 'none', visibility: 'hidden' }}
                    title="Google Tag Manager"
                ></iframe>
            </noscript>
            {/* End Google Tag Manager (noscript) */}
        </HelmetProvider>
    );
};

GoogleTagManager.propTypes = {
    gtmId: PropTypes.string.isRequired,
};

export default GoogleTagManager