import { useEffect, useState } from 'react';
import { send } from '@emailjs/browser';
import {
  emailJsConfigured,
  emailJsPublicKey,
  emailJsServiceId,
  emailJsTemplateId,
} from '../../lib/env';

const subjectPrefix = 'Website Contact Form Submission from ';
const sendCooldownMs = 30000;
const sentAtKey = 'contact-sent-at';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function readSentAt() {
  const value = Number(sessionStorage.getItem(sentAtKey));
  return Number.isFinite(value) ? value : 0;
}

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (!toast) return undefined;
    const timer = window.setTimeout(() => setToast(null), 5000);
    return () => window.clearTimeout(timer);
  }, [toast]);

  function validate() {
    const next = {};
    if (!name.trim()) next.name = 'Enter your name.';
    if (!emailPattern.test(email.trim())) next.email = 'Enter a valid email address.';
    if (!message.trim()) next.message = 'Enter a message.';
    return next;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    if (honeypot.trim()) {
      setName('');
      setEmail('');
      setMessage('');
      setHoneypot('');
      setToast({ type: 'success', text: 'Message sent.' });
      return;
    }

    const elapsed = Date.now() - readSentAt();
    if (elapsed < sendCooldownMs) {
      setToast({ type: 'error', text: 'Please wait a moment before sending another message.' });
      return;
    }

    const trimmedName = name.trim();
    setSending(true);
    try {
      await send(
        emailJsServiceId,
        emailJsTemplateId,
        {
          from_name: trimmedName,
          reply_to: email.trim(),
          message: message.trim(),
          subject: `${subjectPrefix}${trimmedName}`,
        },
        { publicKey: emailJsPublicKey },
      );
      sessionStorage.setItem(sentAtKey, String(Date.now()));
      setName('');
      setEmail('');
      setMessage('');
      setToast({ type: 'success', text: 'Message sent.' });
    } catch {
      setToast({ type: 'error', text: 'The message could not be sent. Please try again.' });
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="section shell" aria-labelledby="contact-heading">
      <div className="section-heading">
        <p className="eyebrow">04</p>
        <h2 id="contact-heading">Contact Me</h2>
      </div>
      <div className="contact-grid">
        {emailJsConfigured ? (
          <form className="card contact-form border border-base-300 bg-base-100 shadow-xl" onSubmit={handleSubmit} noValidate>
            <h3>Message Me!</h3>
            <div className="honeypot" aria-hidden="true">
              <label>
                Company
                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(event) => setHoneypot(event.target.value)}
                />
              </label>
            </div>
            <label className="field" htmlFor="contact-name">
              <span>Your Name</span>
              <input
                id="contact-name"
                name="from_name"
                type="text"
                placeholder="Your Name"
                autoComplete="name"
                maxLength={100}
                value={name}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'contact-name-error' : undefined}
                onChange={(event) => setName(event.target.value)}
                required
              />
              {errors.name && <small id="contact-name-error">{errors.name}</small>}
            </label>
            <label className="field" htmlFor="contact-email">
              <span>Your Email</span>
              <input
                id="contact-email"
                name="reply_to"
                type="email"
                placeholder="Your Email"
                autoComplete="email"
                maxLength={200}
                value={email}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'contact-email-error' : undefined}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
              {errors.email && <small id="contact-email-error">{errors.email}</small>}
            </label>
            <label className="field" htmlFor="contact-message">
              <span>Your Message</span>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Your Message"
                rows="4"
                maxLength={5000}
                value={message}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'contact-message-error' : undefined}
                onChange={(event) => setMessage(event.target.value)}
                required
              />
              {errors.message && <small id="contact-message-error">{errors.message}</small>}
            </label>
            <button type="submit" className="btn btn-primary w-full" disabled={sending}>
              {sending ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        ) : (
          <div className="alert alert-info" role="status">
            <span>Contact form unavailable.</span>
          </div>
        )}
      </div>
      {toast && (
        <div className="toast toast-end toast-bottom z-[70]">
          <div className={`alert ${toast.type === 'success' ? 'alert-success' : 'alert-error'}`} role="status">
            <span>{toast.text}</span>
          </div>
        </div>
      )}
    </section>
  );
}
