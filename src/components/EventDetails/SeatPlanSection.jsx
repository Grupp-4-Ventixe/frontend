import React, { useState } from 'react';
import './SeatPlanSection.css';

const SeatPlanSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleEdit = () => {
    setMenuOpen(false);
    console.log("Edit Seat Plan");
  };

  const handleDelete = () => {
    setMenuOpen(false);
    console.log("Delete Seat Plan");
  };

  return (
    <section className="seatplan-section">
      <div className="seatplan-header">
        <h2>Seat Plan</h2>
        <div className="menu-wrapper">
        </div>
      </div>

      <div className="seatplan-content">
        <div className="seatplan-image">
          <img src="/src/assets/Venue-Map.svg" alt="Seat Plan" />
            <button className="dots-btn" onClick={() => setMenuOpen(!menuOpen)}>⋯</button>
          {menuOpen && (
            <div className="dropdown-menu">
              <button onClick={handleEdit}>Edit</button>
              <button onClick={handleDelete}>Delete</button>
            </div>
          )}
        </div>
        <ul className="seatplan-legend">
          <li><span className="diamond">Diamond</span> <span className="price">$120</span> (Seating)</li>
          <li><span className="platinum">Platinum</span> <span className="price">$100</span> (Seating)</li>
          <li><span className="gold">Gold</span> <span className="price">$85</span> (Seating)</li>
          <li><span className="silver">Silver</span> <span className="price">$70</span> (Seating)</li>
          <li><span className="bronze">Bronze</span> <span className="price">$60</span> (Seating)</li>
          <li><span className="general">General Admission</span> <span className="price">$50</span> (Standing)</li>
          <li><span className="backstage">Backstage Access</span> <span className="price">$200</span> (Standing)</li>
          <li><span className="vip">VIP Lounge</span> <span className="price">$150</span> (Seating)</li>
        </ul>
      </div>

      <hr className="divider" />

      <div className="seatplan-notes">
        <h4>Notes</h4>
        <ul>
          <li>Seating categories include reserved seating with an unobstructed stage view.</li>
          <li>Standing categories include access to open floor areas near the stage.</li>
        </ul>
      </div>

      <div className="seatplan-benefits">
        <h4>Ticket Category Benefits</h4>
        <div className="benefit-boxes">
          <div className="benefit-card">
            <h5>VIP Lounge</h5>
            <ul>
              <li>✓ Premium seating</li>
              <li>✓ Complimentary drinks</li>
              <li>✓ Fast-track entry</li>
            </ul>
            <p className="benefit-price vip">$150</p>
          </div>
          <div className="benefit-card">
            <h5>Backstage Access</h5>
            <ul>
              <li>○ Standing access to the backstage area</li>
              <li>○ Artist meet-and-greet</li>
              <li>○ Exclusive merchandise</li>
            </ul>
            <p className="benefit-price backstage">$200</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeatPlanSection;
