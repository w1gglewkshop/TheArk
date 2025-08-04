import React from 'react';
import './Success.css';

const stories = [
  { id: 1, name: 'Buddy', before: 'https://www.nzymes.com/wp-content/uploads/2014/09/ginger_before_6-23-08.jpg', after: 'https://images.unsplash.com/photo-1523480717984-24cba35ae1ef?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdvbGRlbiUyMHJldHJpZXZlcnxlbnwwfHwwfHx8MA%3D%3D', story: 'Buddy was found abandoned but is now thriving in his forever home.' },
  { id: 2, name: 'Rocky', before: 'https://i2-prod.staffordshire-live.co.uk/incoming/article3533308.ece/ALTERNATES/s1200c/0_hk_tem131119shep_08_result.jpg', after: 'https://www.vetscriptions.co.uk/cdn/shop/articles/BREED_german_shepherd_1024x1024.png?v=1726241046', story: 'Rocky was rescued from the streets and is now a beloved family member.' },
];

const Success = () => (
  <main className="success-main">
    <h1 className="success-title">Success Stories</h1>
    <div className="success-list">
      {stories.map(s => (
        <div className="success-card" key={s.id}>
          <div className="success-images">
            <img src={s.before} alt={s.name + ' before'} className="success-img before" />
            <img src={s.after} alt={s.name + ' after'} className="success-img after" />
          </div>
          <div className="success-info">
            <h3>{s.name}</h3>
            <p>{s.story}</p>
          </div>
        </div>
      ))}
    </div>
  </main>
);

export default Success; 