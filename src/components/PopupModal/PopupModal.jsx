import React, { useState } from 'react';
import { useModal } from '../../context/ModalContext';
import styles from './PopupModal.module.css';

function PopupModal() {
  const { hideModal } = useModal();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !validateEmail(form.email) || !form.message) {
      setStatus('error');
      return;
    }
    setStatus('success');
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
    <>
      <div id="modalOverlay" onClick={handleOverlayClick} className={styles.overlay}>
        <div className={styles.popup}>
          <div onClick={hideModal} className={styles.closeIcon}>
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
              <button type="submit">Submit</button>
            </form>
          )}
          {status === 'error' && <p>Error: Please check your input.</p>}
        </div>
      </div>
    </>
  );
}

export default PopupModal;
