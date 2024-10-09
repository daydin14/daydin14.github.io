// Dependencies
import React from 'react'

const Footer = () => {
    const companyName = 'daydin14';
    const year = new Date().getFullYear();
    const rights = 'All rights reserved.';
    const author = 'David Aydin';
    return (
        <>
            <footer>
                <p>{companyName} &copy; {year} {rights}</p>
                <p>Created by {author}</p>
            </footer>
        </>
    )
}

export default Footer
