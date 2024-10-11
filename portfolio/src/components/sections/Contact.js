// Dependencies
import React, { useState } from 'react';

// Component
import GmapEmbeded from '../contact/GmapEmbeded';

const Contact = () => {
    const email = 'david.aydin6@gmail.com';
    const subject = 'Website Contact Form Submission from ';
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

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
        <div className='flex flex-row justify-center items-center'>
            <GmapEmbeded width='100%' height='500px' />
            <form className="flex flex-col space-y-4 ml-16 w-full max-w-md" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-semibold text-center">Message Me!</h2>
                <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered w-full bg-gray-200 dark:bg-gray-800"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Your Message"
                    className="textarea textarea-bordered w-full bg-gray-200 dark:bg-gray-800"
                    rows="4"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                ></textarea>
                <button
                    type="submit"
                    className="btn btn-primary w-full"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;