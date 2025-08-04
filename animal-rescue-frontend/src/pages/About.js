import React from 'react';
import './About.css';

const About = () => (
  <main className="about-main">
    <section className="about-hero">
      <h1 className="about-title">About Us</h1>
      <p className="about-mission">
        Animal Rescue Center is a non-profit dedicated to saving, rehabilitating, and rehoming animals in need. Our mission is to inspire compassion, promote responsible pet ownership, and create a community where every animal is valued and protected.
      </p>
    </section>
    <section className="about-article">
      <h2>From Our Founder</h2>
      <article className="about-article-text">
        <p>
          “When we started Animal Rescue Center in 2010, we had little more than hope and a deep love for animals. Over the years, we’ve grown into a family of passionate staff, volunteers, and supporters who believe that every animal deserves a second chance. Our journey has been filled with challenges, but every wagging tail and purr reminds us why we do this work.”
        </p>
        <p style={{ fontWeight: 'bold', marginTop: 18 }}>— Alex Morgan, Founder</p>
      </article>
    </section>
    <section className="about-timeline">
      <h2>Our Journey</h2>
      <ul className="timeline-list">
        <li><b>2010:</b> Founded with a small team and a big dream.</li>
        <li><b>2012:</b> First 100 animals rescued and rehomed.</li>
        <li><b>2015:</b> Opened our first dedicated animal shelter.</li>
        <li><b>2018:</b> Launched community education and outreach programs.</li>
        <li><b>2024:</b> 2000+ animals saved, 300+ volunteers, and growing!</li>
      </ul>
    </section>
    <section className="about-impact">
      <h2>Our Impact</h2>
      <div className="impact-cards">
        <div className="impact-card"><span className="impact-num">2000+</span> Animals Rescued</div>
        <div className="impact-card"><span className="impact-num">1800+</span> Successful Adoptions</div>
        <div className="impact-card"><span className="impact-num">300+</span> Active Volunteers</div>
        <div className="impact-card"><span className="impact-num">15</span> Years Serving</div>
      </div>
    </section>
    <section className="about-whyadopt">
      <h2>Why Adopt?</h2>
      <ul className="whyadopt-list">
        <li>Save a life and give a loving home to an animal in need.</li>
        <li>Reduce pet overpopulation and support no-kill rescue.</li>
        <li>Gain a loyal companion and enrich your life.</li>
        <li>Support a compassionate, community-driven mission.</li>
      </ul>
      <img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg" alt="Happy adopted dog" className="about-img-wide" />
    </section>
  </main>
);

export default About; 