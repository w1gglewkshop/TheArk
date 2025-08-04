import React from 'react';
import './PetCard.css';

const PetCard = ({ name, image, rating, desc }) => (
  <div className="pet-card">
    <img src={image} alt={name} className="pet-image" />
    <div className="pet-info">
      <h3>{name}</h3>
      <p>{desc}</p>
      <div className="pet-bottom">
        <span className="pet-rating">{'★'.repeat(rating)}{'☆'.repeat(5-rating)}</span>
        <span className="pet-cart" title="Add to cart">🛒</span>
      </div>
    </div>
  </div>
);

export default PetCard; 