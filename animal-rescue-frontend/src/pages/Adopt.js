import React, { useState } from 'react';
import './Adopt.css';

const samplePets = [
  { id: 1, name: 'Luna', type: 'Dog', age: 2, img: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=400&q=80', desc: 'Playful and loving.' },
  { id: 2, name: 'Milo', type: 'Cat', age: 1, img: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&w=400&q=80', desc: 'Curious and gentle.' },
  { id: 3, name: 'Bella', type: 'Dog', age: 3, img: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=400&q=80', desc: 'Energetic and loyal.' },
  { id: 4, name: 'Oscar', type: 'Cat', age: 5, img: 'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&w=400&q=80', desc: 'Calm and affectionate.' },
];

const Adopt = () => {
  const [filter, setFilter] = useState('All');
  const pets = filter === 'All' ? samplePets : samplePets.filter(p => p.type === filter);

  return (
    <main className="adopt-main">
      <h1 className="adopt-title">Adoptable Animals Directory</h1>
      <div className="adopt-filter">
        <button className={filter === 'All' ? 'active' : ''} onClick={() => setFilter('All')}>All</button>
        <button className={filter === 'Dog' ? 'active' : ''} onClick={() => setFilter('Dog')}>Dogs</button>
        <button className={filter === 'Cat' ? 'active' : ''} onClick={() => setFilter('Cat')}>Cats</button>
      </div>
      <div className="adopt-grid">
        {pets.map(pet => (
          <div className="adopt-card" key={pet.id}>
            <img src={pet.img} alt={pet.name} className="adopt-img" />
            <div className="adopt-info">
              <h3>{pet.name}</h3>
              <div className="adopt-meta">{pet.type} • {pet.age} yrs</div>
              <p>{pet.desc}</p>
              <a href="/adopt/apply" className="adopt-btn">Adopt Me</a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Adopt; 