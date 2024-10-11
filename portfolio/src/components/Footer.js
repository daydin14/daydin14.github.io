// Dependencies
import React from 'react'

// Constants
import FooterDetails from '../constants/FooterDetails';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <footer className="bg-gray-200 dark:bg-gray-900 text-white py-4">
                <div className="container mx-auto text-center text-black dark:text-white">
                    <p>{FooterDetails.companyName} &copy; {year} {FooterDetails.rights}</p>
                    <p>Created by {FooterDetails.author}</p>
                </div>
            </footer>
        </>
    )
}

export default Footer