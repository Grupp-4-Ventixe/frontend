import React, { useState } from 'react';
import './EventPackages.css';

const dummyPackages = [
  { name: 'General Admission Package', price: 50, details: ['Standing', 'Access to Festival Grounds'] },
  { name: 'Silver Package', price: 70, details: ['Seating', 'Mid-tier View'] },
  { name: 'Gold Package', price: 85, details: ['Seating', 'Prime View'] },
  { name: 'Platinum Package', price: 100, details: ['Seating', 'Near Stage'] },
  { name: 'Diamond Package', price: 120, details: ['Seating', 'Front-Row View'] },
  { name: 'VIP Lounge Package', price: 150, details: ['Seating', 'Exclusive Lounge'] },
  { name: 'Artist Meet-and-Greet Package', price: 180, details: ['Standing', 'Backstage Access'] },
  { name: 'Ultimate Access Package', price: 200, details: ['Standing', 'All-Inclusive Benefits'] },
];

const EventPackages = () => {
  const [packages, setPackages] = useState(dummyPackages);
  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  const toggleMenu = (index) => {
    setOpenMenuIndex(prev => (prev === index ? null : index));
  };

  const handleEdit = (index) => {
    console.log('Edit package at index:', index);
    setOpenMenuIndex(null);
  };

  const handleDelete = (index) => {
    setPackages(prev => prev.filter((_, i) => i !== index));
    setOpenMenuIndex(null);
  };

  return (
    <section className="packages-section">
      <div className="packages-header">
        <h2>Packages</h2>
      </div>

      <div className="packages-scroll-wrapper">
        <div className="packages-list">
          {packages.map((pkg, index) => (
            <div className="package-card" key={index}>
              <div className="package-info">
                <h4>{pkg.name}</h4>
                <ul>
                  {pkg.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>

              <div className="package-price">${pkg.price}</div>

              <div className="menu-wrapper">
                <button className="dots-btn" onClick={() => toggleMenu(index)}>⋯</button>
                {openMenuIndex === index && (
                  <div className="merch-dropdown">
                    <button onClick={() => handleEdit(index)}>Edit</button>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventPackages;
