import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer-new">
    <div className="footer-content">
      <div className="footer-contact">
        <span>📞 (555) 123-4567</span>
        <span>✉️ info@animalrescue.org</span>
      </div>
      <div className="footer-social">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">Facebook</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">Twitter</a>
      </div>
    </div>
  </footer>
);

export default Footer; 