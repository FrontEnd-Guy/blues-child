import React, { useState } from 'react';
import { useModal } from '../context/ModalContext';

function PopupModal() {
  const { hideModal } = useModal();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const validateEmail = email => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name || !validateEmail(form.email) || !form.message) {
      setStatus('error');
      return;
    }
    setStatus('success');
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleOverlayClick = e => {
    if (e.target.id === 'modalOverlay') {
      hideModal();
    }
  };

  return (
    <>
        <div id="modalOverlay" onClick={handleOverlayClick} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ position: 'relative', padding: '20px', backgroundColor: 'white', width: '90%', maxWidth: '500px', borderRadius: '10px' }}>
            <button onClick={hideModal} style={{ position: 'absolute', top: '10px', right: '10px' }}>×</button>
            <h2>Let's Jam</h2>
            {status === 'success' ? (
              <p>Thank you for reaching out! We will get back to you soon.</p>
            ) : (
              <form onSubmit={handleSubmit}>
                <label>Name:<input type="text" name="name" value={form.name} onChange={handleChange} required /></label><br />
                <label>Email:<input type="email" name="email" value={form.email} onChange={handleChange} required /></label><br />
                <label>Message:<textarea name="message" value={form.message} onChange={handleChange} required /></label><br />
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
