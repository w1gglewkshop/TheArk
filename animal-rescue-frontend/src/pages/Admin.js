import React from 'react';
import './Admin.css';

const adminLinks = [
  { label: 'Manage Animals', path: '/admin/animals' },
  { label: 'Adoption Applications', path: '/admin/applications' },
  { label: 'Volunteers & Fosters', path: '/admin/volunteers' },
  { label: 'Events', path: '/admin/events' },
  { label: 'Blog Posts', path: '/admin/blog' },
  { label: 'Users', path: '/admin/users' },
];

const Admin = () => (
  <main className="admin-main">
    <h1 className="admin-title">Admin Dashboard</h1>
    <p style={{ textAlign: 'center', color: '#444', marginBottom: 24 }}>
      Welcome to The Ark Admin Panel. Use the links below to manage animals, applications, volunteers, events, blog posts, and users. More features coming soon!
    </p>
    <div className="admin-links">
      {adminLinks.map(link => (
        <a className="admin-card" href={link.path} key={link.path}>{link.label}</a>
      ))}
    </div>
  </main>
);

export default Admin; 