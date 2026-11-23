import { useEffect, useState } from 'react';
import { send } from '@emailjs/browser';
import { FaEnvelope, FaPen, FaUser } from 'react-icons/fa';
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

function formatSubmissionTime(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York',
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).formatToParts(date);
  const value = (type) => parts.find((part) => part.type === type)?.value ?? '';
  return `${value('weekday')}, ${value('month')} ${value('day')}, ${value('year')}, ${value('hour')}:${value('minute')} ${value('dayPeriod')} ET`;
}

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
    const trimmedEmail = email.trim();
    setSending(true);
    try {
      await send(
        emailJsServiceId,
        emailJsTemplateId,
        {
          from_name: trimmedName,
          name: trimmedName,
          reply_to: trimmedEmail,
          email: trimmedEmail,
          message: message.trim(),
          subject: `${subjectPrefix}${trimmedName}`,
          time: formatSubmissionTime(),
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
    <section id="contact" className="bg-base-100 px-4 py-16 md:py-24" aria-labelledby="contact-heading">
      <div className="mx-auto w-full max-w-2xl">
        <h2 id="contact-heading" className="mb-6 text-4xl font-bold md:text-5xl">Contact Me</h2>
        {emailJsConfigured ? (
          <form className="card border border-base-300 bg-base-100 shadow-xl" onSubmit={handleSubmit} noValidate>
            <div className="card-body">
              <h3 className="card-title text-2xl">Message Me!</h3>
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
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Your Name</legend>
                <label className={`input w-full ${errors.name ? 'input-error' : ''}`}>
                  <FaUser className="opacity-70" aria-hidden="true" />
                  <input
                    id="contact-name"
                    name="from_name"
                    type="text"
                    className="grow"
                    placeholder="Your Name"
                    autoComplete="name"
                    maxLength={100}
                    value={name}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'contact-name-error' : undefined}
                    onChange={(event) => setName(event.target.value)}
                    required
                  />
                </label>
                {errors.name && <span id="contact-name-error" className="pt-1 text-sm text-error">{errors.name}</span>}
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Your Email</legend>
                <label className={`input w-full ${errors.email ? 'input-error' : ''}`}>
                  <FaEnvelope className="opacity-70" aria-hidden="true" />
                  <input
                    id="contact-email"
                    name="reply_to"
                    type="email"
                    className="grow"
                    placeholder="Your Email"
                    autoComplete="email"
                    maxLength={200}
                    value={email}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'contact-email-error' : undefined}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </label>
                {errors.email && <span id="contact-email-error" className="pt-1 text-sm text-error">{errors.email}</span>}
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Your Message</legend>
                <label className={`textarea w-full ${errors.message ? 'textarea-error' : ''}`}>
                  <FaPen className="mt-1 opacity-70" aria-hidden="true" />
                  <textarea
                    id="contact-message"
                    name="message"
                    className="w-full grow bg-transparent"
                    placeholder="Your Message"
                    rows="4"
                    maxLength={5000}
                    value={message}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'contact-message-error' : undefined}
                    onChange={(event) => setMessage(event.target.value)}
                    required
                  />
                </label>
                {errors.message && <span id="contact-message-error" className="pt-1 text-sm text-error">{errors.message}</span>}
              </fieldset>
              <button type="submit" className="btn btn-primary mt-2 w-full" disabled={sending}>
                {sending ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        ) : (
          <div className="alert alert-info" role="status">
            <span>Contact form unavailable.</span>
          </div>
        )}
      </div>
      {toast && (
        <div className="toast toast-end toast-bottom z-70">
          <div className={`alert ${toast.type === 'success' ? 'alert-success' : 'alert-error'}`} role="status">
            <span>{toast.text}</span>
          </div>
        </div>
      )}
    </section>
  );
}
