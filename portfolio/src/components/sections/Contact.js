// Dependencies
import React, { useState } from 'react';

// Hooks
import useIsMobile from '../../hooks/useIsMobile';

// Component
import GmapEmbeded from '../contact/GmapEmbeded';

const Contact = () => {
    const email = 'david.aydin6@gmail.com';
    const subject = 'Website Contact Form Submission from ';
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const { isMobile } = useIsMobile();

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:${email}?subject=${subject}${name}&body=${encodeURIComponent(message)}`;

        // Clear the form fields
        setName('');
        setMessage('');

        // Delay navigation to allow state updates to take effect
        setTimeout(() => {
            window.location.href = mailtoLink;
        }, 100);
    };

    return (
        <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} justify-center items-center`}>
            <GmapEmbeded width={`${isMobile ? '400px' : '800px'}`} height={`${isMobile ? '250px' : '500px'}`} />
            <form className={`flex flex-col space-y-4 ${isMobile ? 'w-screen mt-4' : 'w-full ml-16'} max-w-md`} onSubmit={handleSubmit}>
                <h2 className="text-2xl font-semibold text-center">Message Me!</h2>
                <input
                    type="text"
                    placeholder="Your Name"
                    className={`input input-bordered ${isMobile ? 'w-64 ml-20' : 'w-full'} bg-gray-200 dark:bg-gray-800`}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Your Message"
                    className={`textarea textarea-bordered ${isMobile ? 'w-96 ml-6' : 'w-full'} bg-gray-200 dark:bg-gray-800`}
                    rows="4"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                ></textarea>
                <button
                    type="submit"
                    className={`btn btn-primary ${isMobile ? 'w-64 ml-20' : 'w-full'}`}
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;