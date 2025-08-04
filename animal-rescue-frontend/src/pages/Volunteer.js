import React, { useState } from 'react';
import './Volunteer.css';

const Volunteer = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', type: 'Volunteer', message: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    // TODO: Send to backend
  };

  if (submitted) return (
    <main className="volunteer-main"><div className="volunteer-success">Thank you for signing up! We will contact you soon.</div></main>
  );

  return (
    <main className="volunteer-main">
      <div className="volunteer-info">
        <h1>Volunteer & Foster Sign-Up</h1>
        <p>Join our amazing team of volunteers and foster families. Make a difference in the lives of animals in need!</p>
      </div>
      <form className="volunteer-form" onSubmit={handleSubmit}>
        <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} required />
        <select name="type" value={form.type} onChange={handleChange} required>
          <option value="Volunteer">Volunteer</option>
          <option value="Foster">Foster</option>
        </select>
        <textarea name="message" placeholder="Tell us why you want to help" value={form.message} onChange={handleChange} required />
        <button type="submit">Sign Up</button>
      </form>
    </main>
  );
};

export default Volunteer; 