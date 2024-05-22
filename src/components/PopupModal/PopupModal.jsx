import React, { useState, useEffect, useRef } from 'react';
import client from '../../client';
import { useModal } from '../../context/ModalContext';
import styles from './PopupModal.module.css';

function PopupModal() {
  const { hideModal } = useModal();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const firstInputRef = useRef(null);

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  useEffect(() => {
    const handleKeyUp = (event) => {
      if (event.key === 'Escape') {
        hideModal();
      }
    };

    document.addEventListener('keyup', handleKeyUp);
    firstInputRef.current.focus();

    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [hideModal]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    if (!form.name) {
      setStatus('error');
      setErrorMessage('Name is required.');
      return;
    }
    if (!validateEmail(form.email)) {
      setStatus('error');
      setErrorMessage('Invalid email address.');
      return;
    }
    if (!form.message) {
      setStatus('error');
      setErrorMessage('Message is required.');
      return;
    }

    try {
      await client.create({
        _type: 'booking',
        name: form.name,
        email: form.email,
        message: form.message,
        submittedAt: new Date().toISOString(),
      });
      setStatus('success');
    } catch (error) {
      console.error('Error saving data to Sanity:', error);
      setErrorMessage('Error saving data to Sanity: ' + error.message);
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleOverlayClick = (e) => {
    if (e.target.id === 'modalOverlay') {
      hideModal();
    }
  };

  return (
    <div
      id="modalOverlay"
      onClick={handleOverlayClick}
      className={styles.overlay}
      aria-modal="true"
      role="dialog">
      <div className={styles.popup}>
        <div
          onClick={hideModal}
          className={styles.closeIcon}
          role="button"
          aria-label="Close modal">
          ✖️
        </div>
        {status === 'success' ? (
          <div className={styles.successNotice}>
            <h3>Thank you for reaching out! We will get back to you soon.</h3>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <h2>Let's Jam!</h2>
            <label className={styles.label}>
              <input
                className={styles.input}
                placeholder="Your Name"
                type="text"
                name="name"
                ref={firstInputRef}
                value={form.name}
                onChange={handleChange}
                required
              />
            </label>
            <label className={styles.label}>
              <input
                className={styles.input}
                placeholder="Your Email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </label>
            <label className={styles.label}>
              <textarea
                className={styles.textarea}
                placeholder="Your Message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
              />
            </label>
            <button className={styles.submitBtn} type="submit">
              Submit
            </button>
            <p className={styles.phone}>or text 662 213 3430</p>
          </form>
        )}
        {status === 'error' && <p>Error: {errorMessage}</p>}
      </div>
    </div>
  );
}

export default PopupModal;
