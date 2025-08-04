import React, { useState } from 'react';
import './AdoptApply.css';

const AdoptApply = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', pet: '', home: '', message: ''
  });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    // TODO: Send to backend
  };

  if (submitted) return (
    <main className="adoptapply-main"><div className="adoptapply-success">Thank you for your application! We will contact you soon.</div></main>
  );

  return (
    <main className="adoptapply-main">
      <form className="adoptapply-form" onSubmit={handleSubmit}>
        <h2>Adoption Application</h2>
        <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} required />
        <input name="pet" placeholder="Pet Name (or type)" value={form.pet} onChange={handleChange} required />
        <textarea name="home" placeholder="Tell us about your home and family" value={form.home} onChange={handleChange} required />
        <textarea name="message" placeholder="Why do you want to adopt?" value={form.message} onChange={handleChange} required />
        <button type="submit">Submit Application</button>
      </form>
    </main>
  );
};

export default AdoptApply; 