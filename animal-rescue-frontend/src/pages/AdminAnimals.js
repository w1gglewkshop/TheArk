import React from 'react';

const samplePets = [
  { id: 1, name: 'Luna', type: 'Dog', age: 2, desc: 'Playful and loving.' },
  { id: 2, name: 'Milo', type: 'Cat', age: 1, desc: 'Curious and gentle.' },
  { id: 3, name: 'Bella', type: 'Dog', age: 3, desc: 'Energetic and loyal.' },
  { id: 4, name: 'Oscar', type: 'Cat', age: 5, desc: 'Calm and affectionate.' },
];

const AdminAnimals = () => (
  <main className="admin-section-main">
    <h2>Manage Animals</h2>
    <table style={{ width: '100%', background: '#fff', borderCollapse: 'collapse', marginTop: 16 }}>
      <thead>
        <tr style={{ background: '#f7f7f7' }}>
          <th>ID</th>
          <th>Name</th>
          <th>Type</th>
          <th>Age</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {samplePets.map(pet => (
          <tr key={pet.id}>
            <td>{pet.id}</td>
            <td>{pet.name}</td>
            <td>{pet.type}</td>
            <td>{pet.age}</td>
            <td>{pet.desc}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </main>
);

export default AdminAnimals; 