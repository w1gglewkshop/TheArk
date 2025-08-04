import React from 'react';
import './Services.css';

const services = [
  {
    icon: '🐶',
    title: 'Pet Adoption',
    desc: 'We help you find your perfect companion. Our adoption counselors guide you every step of the way, ensuring a great match for both you and the pet.',
    img: 'https://images.pexels.com/photos/458799/pexels-photo-458799.jpeg',
    cta: 'See Adoptable Pets'
  },
  {
    icon: '🏥',
    title: 'Veterinary Care',
    desc: 'Our on-site veterinary team provides medical care, vaccinations, and spay/neuter services to keep every animal healthy and ready for a new home.',
    img: 'https://images.pexels.com/photos/1707828/pexels-photo-1707828.jpeg',
    cta: 'Meet Our Vets'
  },
  {
    icon: '🏡',
    title: 'Foster Program',
    desc: 'Foster families are a lifeline for animals in transition. We provide all supplies and support—just bring your love and care.',
    img: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg',
    cta: 'Become a Foster'
  },
  {
    icon: '🚨',
    title: 'Rescue Operations',
    desc: 'Our team responds to emergency calls, rescues animals from neglect or abuse, and works with local authorities to ensure their safety.',
    img: 'https://images.pexels.com/photos/573241/pexels-photo-573241.jpeg',
    cta: 'Report a Rescue'
  },
  {
    icon: '🎓',
    title: 'Community Education',
    desc: 'We offer workshops, school visits, and resources to teach responsible pet ownership and animal welfare.',
    img: 'https://images.pexels.com/photos/733416/pexels-photo-733416.jpeg',
    cta: 'Join a Workshop'
  }
];

const Services = () => (
  <main className="services-main">
    <h1 className="services-title">Our Program</h1>
    <p style={{ textAlign: 'center', color: '#444', fontSize: '1.1rem', marginBottom: 32 }}>
      From rescue to recovery to rehoming, we’re with every animal every step of the way. Learn more about how you can get involved and make a difference!
    </p>
    <div className="services-cards">
      {services.map((service, idx) => (
        <div className="service-card" key={idx}>
          <img src={service.img} alt={service.title} className="service-img" />
          <div className="service-icon">{service.icon}</div>
          <div className="service-title">{service.title}</div>
          <div className="service-desc">{service.desc}</div>
          <button className="service-cta">{service.cta}</button>
        </div>
      ))}
    </div>
    <section className="services-howhelp">
      <h2>How We Help</h2>
      <ul className="howhelp-list">
        <li>Rescue animals from unsafe environments</li>
        <li>Provide medical care and rehabilitation</li>
        <li>Find loving, permanent homes</li>
        <li>Educate the community on animal welfare</li>
      </ul>
      <p style={{ marginTop: 18, color: '#1a7f5a', fontWeight: 600 }}>
        Want to help? <a href="/contact" style={{ color: '#1a7f5a', textDecoration: 'underline' }}>Contact us</a> to volunteer, foster, or donate.
      </p>
    </section>
  </main>
);

export default Services; 