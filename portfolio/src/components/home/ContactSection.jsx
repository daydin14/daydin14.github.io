import { useState } from 'react';
import MapEmbed from './MapEmbed';

const email = 'david.aydin6@gmail.com';
const subject = 'Website Contact Form Submission from ';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(`${subject}${name}`)}&body=${encodeURIComponent(message)}`;
    setName('');
    setMessage('');
    window.location.href = mailtoLink;
  }

  return (
    <section id="contact" className="section shell" aria-labelledby="contact-heading">
      <div className="section-heading">
        <p className="eyebrow">04</p>
        <h2 id="contact-heading">Contact Me</h2>
      </div>
      <div className="contact-grid">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Message Me!</h3>
          <p className="email-line">
            <a href={`mailto:${email}`}>{email}</a>
          </p>
          <label className="field" htmlFor="contact-name">
            <span>Your Name</span>
            <input
              id="contact-name"
              name="name"
              type="text"
              placeholder="Your Name"
              autoComplete="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </label>
          <label className="field" htmlFor="contact-message">
            <span>Your Message</span>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Your Message"
              rows="4"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              required
            />
          </label>
          <button type="submit" className="btn">Send Message</button>
          <p className="form-hint">Sending opens your email app.</p>
        </form>
        <MapEmbed />
      </div>
    </section>
  );
}
