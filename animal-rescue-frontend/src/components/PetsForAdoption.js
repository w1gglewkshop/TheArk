import React from 'react';
import PetCard from './PetCard';
import './PetsForAdoption.css';

const pets = [
  {
    name: 'Lily',
    image: 'https://images.pexels.com/photos/458799/pexels-photo-458799.jpeg',
    rating: 3,
    desc: 'A sweet Chihuahua mix who loves cuddles and treats.'
  },
  {
    name: 'Charlie',
    image: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg',
    rating: 4,
    desc: 'A gentle tabby cat who enjoys sunbathing and playing with toys.'
  },
  {
    name: 'Molly',
    image: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg',
    rating: 3,
    desc: 'A fluffy Maltese who is friendly with kids and other pets.'
  },
  {
    name: 'Neo',
    image: 'https://images.pexels.com/photos/45243/kitty-cat-kitten-pet-45243.jpeg',
    rating: 3,
    desc: 'A curious and playful kitten looking for a loving home.'
  },
  {
    name: 'Bella',
    image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg',
    rating: 5,
    desc: 'A loyal and energetic dog who loves outdoor adventures.'
  },
  {
    name: 'Oscar',
    image: 'https://images.pexels.com/photos/733416/pexels-photo-733416.jpeg',
    rating: 4,
    desc: 'A senior cat with a calm demeanor and lots of love to give.'
  },
  {
    name: 'Daisy',
    image: 'https://images.pexels.com/photos/1139793/pexels-photo-1139793.jpeg',
    rating: 5,
    desc: 'A playful puppy who loves to run and fetch.'
  },
  {
    name: 'Simba',
    image: 'https://images.pexels.com/photos/1707828/pexels-photo-1707828.jpeg',
    rating: 4,
    desc: 'A brave rescue with a big heart and a bigger personality.'
  }
];

const PetsForAdoption = ({ showPrice }) => (
  <section className="pets-section">
    <h2>Pets For Adoption</h2>
    <div className="pets-list">
      {pets.map((pet, idx) => <PetCard key={idx} name={pet.name} image={pet.image} rating={pet.rating} desc={pet.desc} showPrice={false} />)}
    </div>
  </section>
);

export default PetsForAdoption; 