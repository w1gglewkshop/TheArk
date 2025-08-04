import React from 'react';

const sampleVolunteers = [
  { id: 1, name: 'Carlos M.', role: 'Volunteer', since: '2022' },
  { id: 2, name: 'Emily R.', role: 'Foster', since: '2023' },
  { id: 3, name: 'Alex Morgan', role: 'Volunteer', since: '2021' },
];

const AdminVolunteers = () => (
  <main className="admin-section-main">
    <h2>Volunteers & Fosters</h2>
    <table style={{ width: '100%', background: '#fff', borderCollapse: 'collapse', marginTop: 16 }}>
      <thead>
        <tr style={{ background: '#f7f7f7' }}>
          <th>ID</th>
          <th>Name</th>
          <th>Role</th>
          <th>Since</th>
        </tr>
      </thead>
      <tbody>
        {sampleVolunteers.map(v => (
          <tr key={v.id}>
            <td>{v.id}</td>
            <td>{v.name}</td>
            <td>{v.role}</td>
            <td>{v.since}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </main>
);

export default AdminVolunteers; 