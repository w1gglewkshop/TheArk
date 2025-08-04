import React from 'react';
import './Hero.css';

const Hero = () => (
  <section className="hero">
    <div className="hero-content">
      <h4>WELCOME TO PET RESCUE</h4>
      <h1>We will take care<br/>of your pets</h1>
      <p>Promoting them continuous improvement of human and technological resources generating competitive</p>
      <button className="discover-btn">Discover More <span role="img" aria-label="arrow">↗️</span></button>
    </div>
    <div className="hero-image">
      <img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg" alt="Dog" />
    </div>
  </section>
);

export default Hero; 