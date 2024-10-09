// Dependencies
import React from 'react'

const Footer = () => {
    const companyName = 'daydin14';
    const year = new Date().getFullYear();
    const rights = 'All rights reserved.';
    const author = 'David Aydin';
    return (
        <>
            <footer className="bg-gray-200 dark:bg-gray-900 text-white py-4">
                <div className="container mx-auto text-center text-black dark:text-white">
                    <p>{companyName} &copy; {year} {rights}</p>
                    <p>Created by {author}</p>
                </div>
            </footer>
        </>
    )
}

export default Footer
