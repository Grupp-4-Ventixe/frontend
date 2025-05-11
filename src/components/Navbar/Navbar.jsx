import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-top">
        <div className="logo">Ventixe</div>
        <ul className="nav-links">
          <li>Dashboard</li>
          <li>Bookings</li>
          <li>Events</li>
        </ul>
      </div>
      <div className="navbar-bottom">
        <button className="sign-out-btn">Sign Out</button>
      </div>
    </nav>
  );
};

export default Navbar;
