import React from 'react'

const Contact = () => {
    return (
        <div>
            <p>Feel free to reach out to me...</p>
            <form className="flex flex-col space-y-4">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="p-2 border rounded"
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    className="p-2 border rounded"
                />
                <textarea
                    placeholder="Your Message"
                    className="p-2 border rounded"
                    rows="4"
                ></textarea>
                <button
                    type="submit"
                    className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Send Message
                </button>
            </form>
        </div>
    )
}

export default Contact
