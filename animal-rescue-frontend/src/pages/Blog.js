import React from 'react';
import './Blog.css';

const posts = [
  {
    title: 'How Luna Found Her Forever Home',
    date: 'July 2024',
    image: 'https://images.pexels.com/photos/458799/pexels-photo-458799.jpeg?auto=compress&w=400&q=80',
    excerpt: 'Luna was found abandoned but is now thriving in her new home. Her story is a reminder of the power of compassion and second chances.'
  },
  {
    title: 'Volunteer Spotlight: Emily’s Journey',
    date: 'June 2024',
    image: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&w=400&q=80',
    excerpt: 'Emily has been volunteering with us for 3 years. She shares her favorite rescue moments and why she loves helping animals.'
  },
  {
    title: 'Why Spaying & Neutering Saves Lives',
    date: 'May 2024',
    image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&w=400&q=80',
    excerpt: 'Learn why spaying and neutering is crucial for animal health and how it helps reduce pet overpopulation.'
  },
  {
    title: 'Fostering: A Life-Saving Experience',
    date: 'April 2024',
    image: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&w=400&q=80',
    excerpt: 'Discover how fostering helps animals recover and prepares them for adoption. Read stories from our amazing foster families.'
  }
];

const Blog = () => (
  <main className="blog-main">
    <h1 className="blog-title">Our Stories</h1>
    <section className="blog-featured">
      <h2>Featured Story</h2>
      <div className="blog-featured-content">
        <img src={posts[0].image} alt={posts[0].title} className="blog-img" />
        <div>
          <div className="blog-post-title">{posts[0].title}</div>
          <div className="blog-date">{posts[0].date}</div>
          <div className="blog-excerpt">{posts[0].excerpt}</div>
        </div>
      </div>
    </section>
    <div className="blog-posts">
      {posts.slice(1).map((post, idx) => (
        <div className="blog-card" key={idx}>
          <img src={post.image} alt={post.title} className="blog-img" />
          <div className="blog-content">
            <div className="blog-date">{post.date}</div>
            <div className="blog-post-title">{post.title}</div>
            <div className="blog-excerpt">{post.excerpt}</div>
          </div>
        </div>
      ))}
    </div>
    <section className="blog-share">
      <h2>Share Your Story</h2>
      <p>Have you adopted, fostered, or volunteered with us? <a href="/contact" className="blog-share-link">Contact us</a> to share your experience and inspire others to make a difference.</p>
    </section>
  </main>
);

export default Blog; 