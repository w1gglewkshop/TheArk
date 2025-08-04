import React from 'react';

const sampleUsers = [
  { id: 1, name: 'Jane Doe', email: 'jane@example.com' },
  { id: 2, name: 'John Smith', email: 'john@example.com' },
  { id: 3, name: 'Priya S.', email: 'priya@example.com' },
];

const AdminUsers = () => (
  <main className="admin-section-main">
    <h2>Users</h2>
    <table style={{ width: '100%', background: '#fff', borderCollapse: 'collapse', marginTop: 16 }}>
      <thead>
        <tr style={{ background: '#f7f7f7' }}>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {sampleUsers.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </main>
);

export default AdminUsers; 