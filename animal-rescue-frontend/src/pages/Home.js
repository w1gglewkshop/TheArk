import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const impactStats = [
  { label: '1200+ Rescued in June', img: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg', shape: 'circle' },
  { label: '600+ Adopted', img: 'https://images.pexels.com/photos/573241/pexels-photo-573241.jpeg', shape: 'circle' },
  { label: '30+ Volunteers', img: 'https://images.pexels.com/photos/1707828/pexels-photo-1707828.jpeg', shape: 'circle' }
];

const joinUs = [
  { title: 'Become a Volunteer', desc: 'Give your time and heart to animals in need. Volunteers are the backbone of our rescue efforts.', icon: '🤝' },
  { title: 'Sponsor a Meal', desc: 'Help us feed our rescues. Every meal is a step toward recovery and hope.', icon: '🍲' },
  { title: 'Adopt', desc: 'Open your home to a rescue and change a life forever.', icon: '🏠' }
];

const testimonials = [
  { name: 'Jane D.', text: 'Adopting Luna was the best decision ever. She brings so much joy to our family every day.' },
  { name: 'Carlos M.', text: 'Volunteering here has changed my life. The animals and the team are truly inspiring.' },
  { name: 'Priya S.', text: 'We fostered Max and ended up adopting him. Thank you for all you do!' }
];

const featuredStory = {
  title: 'Meet Luna: From Abandoned to Adored',
  img: 'https://images.pexels.com/photos/4587992/pexels-photo-4587992.jpeg?auto=compress&w=400&q=80', // new photo
  text: 'Luna was found alone and scared, but thanks to our volunteers and a loving foster family, she blossomed into a playful, affectionate companion. Today, Luna is thriving in her forever home, a testament to the power of rescue and love.'
};


const DONATION_URL = 'https://www.paypal.com/signin';

const Home = () => {
  const navigate = useNavigate();
  return (
    <main className="main-hero">
      <section className="hero-section">
        <div className="hero-left">
          <div className="volunteer-banner" tabIndex={0}>
            Join our 2025 volunteer program <button className="volunteer-btn" onClick={() => navigate('/volunteer')}>Know more</button>
          </div>
          <h1 className="hero-title">Every Dog Deserves a Chance at Life</h1>
          <p className="hero-sub">We rescue, rehabilitate, and rehome animals in need. Join us in making a difference—every act of kindness counts.</p>
          <button className="donate-btn" onClick={() => window.open(DONATION_URL, '_blank', 'noopener noreferrer')}>Donate Now</button>
        </div>
        <div className="hero-right">
          <div className="impact-stats">
            {impactStats.map((stat, idx) => (
              <div className="impact-item" key={idx}>
                <img src={stat.img} alt={stat.label} className="impact-img" />
                <div className="impact-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="featured-story">
        <h2>{featuredStory.title}</h2>
        <div className="featured-story-content">
          <img src={featuredStory.img} alt={featuredStory.title} className="featured-story-img" />
          <p>{featuredStory.text}</p>
        </div>
      </section>
      <section className="join-section">
        <h2 className="join-title">How You Can Help</h2>
        <div className="join-cards">
          {/* Map with click handlers for each card */}
          <div
            className="join-card"
            onClick={() => navigate('/volunteer')}
            style={{ cursor: 'pointer' }}
          >
            <div className="join-icon">🤝</div>
            <div className="join-card-title">Become a Volunteer</div>
            <div className="join-card-desc">Give your time and heart to animals in need. Volunteers are the backbone of our rescue efforts.</div>
            <span className="join-arrow">↗</span>
          </div>
          <div
            className="join-card"
            onClick={() => window.open(DONATION_URL, '_blank', 'noopener noreferrer')}
            style={{ cursor: 'pointer' }}
          >
            <div className="join-icon">🍲</div>
            <div className="join-card-title">Sponsor a Meal</div>
            <div className="join-card-desc">Help us feed our rescues. Every meal is a step toward recovery and hope.</div>
            <span className="join-arrow">↗</span>
          </div>
          <div
            className="join-card"
            onClick={() => navigate('/adopt')}
            style={{ cursor: 'pointer' }}
          >
            <div className="join-icon">🏠</div>
            <div className="join-card-title">Adopt</div>
            <div className="join-card-desc">Open your home to a rescue and change a life forever.</div>
            <span className="join-arrow">↗</span>
          </div>
        </div>
      </section>
      <section className="testimonials-section">
        <h2>What Our Community Says</h2>
        <div className="testimonials-cards">
          {testimonials.map((t, idx) => (
            <div className="testimonial-card" key={idx}>
              <p>“{t.text}”</p>
              <div className="testimonial-author">- {t.name}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home; 