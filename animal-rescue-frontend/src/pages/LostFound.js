import React, { useState } from 'react';
import './LostFound.css';

const sampleReports = [
  { id: 1, type: 'Lost', name: 'Max', desc: 'Brown dog, last seen near Main St.', contact: '555-1234', img: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&w=400&q=80' },
  { id: 2, type: 'Found', name: 'Whiskers', desc: 'Gray tabby cat, found in park.', contact: '555-5678', img: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&w=400&q=80' },
];

const LostFound = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ type: 'Lost', name: '', desc: '', contact: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    // TODO: Send to backend
  };

  return (
    <main className="lostfound-main">
      <h1 className="lostfound-title">Lost & Found Pets Board</h1>
      <div className="lostfound-list">
        {sampleReports.map(r => (
          <div className={`lostfound-card ${r.type.toLowerCase()}`} key={r.id}>
            <img src={r.img} alt={r.name} className="lostfound-img" />
            <div className="lostfound-type">{r.type}</div>
            <div className="lostfound-name">{r.name}</div>
            <div className="lostfound-desc">{r.desc}</div>
            <div className="lostfound-contact">Contact: {r.contact}</div>
          </div>
        ))}
      </div>
      <form className="lostfound-form" onSubmit={handleSubmit}>
        <h2>Report a Lost or Found Pet</h2>
        <select name="type" value={form.type} onChange={handleChange} required>
          <option value="Lost">Lost</option>
          <option value="Found">Found</option>
        </select>
        <input name="name" placeholder="Pet Name" value={form.name} onChange={handleChange} required />
        <input name="desc" placeholder="Description / Last Seen" value={form.desc} onChange={handleChange} required />
        <input name="contact" placeholder="Your Contact Info" value={form.contact} onChange={handleChange} required />
        <button type="submit">Submit Report</button>
      </form>
      {submitted && <div className="lostfound-success">Thank you! Your report has been submitted.</div>}
    </main>
  );
};

export default LostFound; 