import React from 'react';

const sampleEvents = [
  { id: 1, title: 'Adoption Day', date: '2024-08-10', location: 'Rescue Center' },
  { id: 2, title: 'Volunteer Orientation', date: '2024-08-15', location: 'Community Hall' },
  { id: 3, title: 'Fundraising Gala', date: '2024-09-01', location: 'City Banquet Hall' },
];

const AdminEvents = () => (
  <main className="admin-section-main">
    <h2>Events</h2>
    <table style={{ width: '100%', background: '#fff', borderCollapse: 'collapse', marginTop: 16 }}>
      <thead>
        <tr style={{ background: '#f7f7f7' }}>
          <th>ID</th>
          <th>Title</th>
          <th>Date</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        {sampleEvents.map(ev => (
          <tr key={ev.id}>
            <td>{ev.id}</td>
            <td>{ev.title}</td>
            <td>{new Date(ev.date).toLocaleDateString()}</td>
            <td>{ev.location}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </main>
);

export default AdminEvents; 