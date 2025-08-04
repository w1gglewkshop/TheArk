import React from 'react';

const sampleApplications = [
  { id: 1, applicant: 'Jane Doe', pet: 'Luna', status: 'Pending' },
  { id: 2, applicant: 'John Smith', pet: 'Milo', status: 'Approved' },
  { id: 3, applicant: 'Priya S.', pet: 'Bella', status: 'Rejected' },
];

const AdminApplications = () => (
  <main className="admin-section-main">
    <h2>Adoption Applications</h2>
    <table style={{ width: '100%', background: '#fff', borderCollapse: 'collapse', marginTop: 16 }}>
      <thead>
        <tr style={{ background: '#f7f7f7' }}>
          <th>ID</th>
          <th>Applicant</th>
          <th>Pet</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {sampleApplications.map(app => (
          <tr key={app.id}>
            <td>{app.id}</td>
            <td>{app.applicant}</td>
            <td>{app.pet}</td>
            <td>{app.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </main>
);

export default AdminApplications; 