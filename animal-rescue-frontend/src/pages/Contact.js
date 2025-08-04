import React from 'react';
import './Contact.css';

const faqs = [
  {
    q: 'How can I adopt a pet?',
    a: 'Visit our center or fill out the adoption application online. Our team will guide you through the process and help you find your perfect match.'
  },
  {
    q: 'Can I volunteer?',
    a: 'Absolutely! We welcome volunteers of all ages and backgrounds. Sign up on our website or visit us to learn more.'
  },
  {
    q: 'Do you accept donations?',
    a: 'Yes, donations help us save more lives. You can donate online, in person, or by mail.'
  },
  {
    q: 'Can I visit the shelter?',
    a: 'Yes! We love visitors. Please check our open hours or contact us to schedule a tour.'
  }
];

const Contact = () => (
  <main className="contact-main">
    <section className="contact-hero">
      <h1>Contact Us</h1>
      <p>We’d love to hear from you! Whether you want to adopt, volunteer, donate, or just say hello, our team is here to help. Every question is important to us.</p>
    </section>
    <section className="contact-info">
      <div className="contact-details">
        <h3>Animal Rescue Center</h3>
        <p>1234 Hope Lane<br />Springfield, USA<br />Phone: (555) 123-4567<br />Email: info@animalrescue.org</p>
        <img src="https://images.pexels.com/photos/2090651/pexels-photo-2090651.jpeg" alt="Map" className="contact-map" />
        <img src="https://images.pexels.com/photos/573241/pexels-photo-573241.jpeg" alt="Staff" className="contact-staff" />
      </div>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <input type="text" placeholder="Phone Number" />
        <textarea placeholder="Your Message" required />
        <button type="submit">Send Message</button>
      </form>
    </section>
    <section className="contact-faq">
      <h2>Frequently Asked Questions</h2>
      <ul className="faq-list">
        {faqs.map((faq, idx) => (
          <li key={idx}>
            <b>{faq.q}</b><br />
            {faq.a}
          </li>
        ))}
      </ul>
    </section>
    <section className="contact-visit">
      <h2>Visit Us</h2>
      <p>We welcome visitors during our open hours. Come meet our animals, our team, and see the difference you can make!</p>
    </section>
  </main>
);

export default Contact; 