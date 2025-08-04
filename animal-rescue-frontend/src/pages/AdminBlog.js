import React from 'react';

const samplePosts = [
  { id: 1, title: 'How Luna Found Her Forever Home', date: 'July 2024', excerpt: 'Luna was found abandoned but is now thriving in her new home.' },
  { id: 2, title: 'Volunteer Spotlight: Emily’s Journey', date: 'June 2024', excerpt: 'Emily has been volunteering with us for 3 years.' },
  { id: 3, title: 'Why Spaying & Neutering Saves Lives', date: 'May 2024', excerpt: 'Learn why spaying and neutering is crucial for animal health.' },
];

const AdminBlog = () => (
  <main className="admin-section-main">
    <h2>Blog Posts</h2>
    <table style={{ width: '100%', background: '#fff', borderCollapse: 'collapse', marginTop: 16 }}>
      <thead>
        <tr style={{ background: '#f7f7f7' }}>
          <th>ID</th>
          <th>Title</th>
          <th>Date</th>
          <th>Excerpt</th>
        </tr>
      </thead>
      <tbody>
        {samplePosts.map(post => (
          <tr key={post.id}>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.date}</td>
            <td>{post.excerpt}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </main>
);

export default AdminBlog; 