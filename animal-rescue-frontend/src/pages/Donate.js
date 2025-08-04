import React, { useState } from 'react';
import './Donate.css';

const Donate = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', amount: '', message: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    // TODO: Integrate with payment provider
  };

  if (submitted) return (
    <main className="donate-main"><div className="donate-success">Thank you for your generous donation!</div></main>
  );

  return (
    <main className="donate-main">
      <form className="donate-form" onSubmit={handleSubmit}>
        <h2>Donate & Sponsor</h2>
        <input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
        <input name="amount" type="number" min="1" placeholder="Amount (USD)" value={form.amount} onChange={handleChange} required />
        <textarea name="message" placeholder="Message (optional)" value={form.message} onChange={handleChange} />
        <button type="submit">Donate</button>
        <a href="https://www.paypal.com/signin" target="_blank" rel="noopener noreferrer" className="donate-paypal">Donate with PayPal</a>
      </form>
    </main>
  );
};

export default Donate; 