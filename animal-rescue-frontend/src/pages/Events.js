import React, { useState } from 'react';
import './Events.css';

const sampleEvents = [
  { id: 1, title: 'Adoption Day', date: '2024-08-10', desc: 'Meet our adoptable pets and find your new best friend!', location: 'Rescue Center' },
  { id: 2, title: 'Volunteer Orientation', date: '2024-08-15', desc: 'Learn how to get involved and help animals in need.', location: 'Community Hall' },
  { id: 3, title: 'Fundraising Gala', date: '2024-09-01', desc: 'Join us for an evening of giving and celebration.', location: 'City Banquet Hall' },
];

const Events = () => {
  const [rsvped, setRsvped] = useState({});

  const handleRsvp = (id) => {
    setRsvped(prev => ({ ...prev, [id]: true }));
  };

  return (
    <main className="events-main">
      <h1 className="events-title">Event Calendar</h1>
      <div className="events-list">
        {sampleEvents.map(ev => (
          <div className="event-card" key={ev.id}>
            <div className="event-date">{new Date(ev.date).toLocaleDateString()}</div>
            <div className="event-title">{ev.title}</div>
            <div className="event-desc">{ev.desc}</div>
            <div className="event-location">Location: {ev.location}</div>
            {rsvped[ev.id] ? (
              <div className="event-rsvp-confirm">Thank you for your RSVP!</div>
            ) : (
              <button className="event-rsvp" onClick={() => handleRsvp(ev.id)}>RSVP</button>
            )}
          </div>
        ))}
      </div>
    </main>
  );
};

export default Events; 