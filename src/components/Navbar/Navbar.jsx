import React from 'react';
import './Navbar.css';
import { LayoutDashboard, CheckSquare, Ticket, LogOut } from 'lucide-react';
import VentixeLogo from '../../assets/ventixe-logo.svg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-top">
        <div className="logo">
          <img src={VentixeLogo} alt="Ventixe Logo" className="logo-img" />
        </div>
          <ul className="nav-links">
            <li><LayoutDashboard size={18} /> Dashboard</li>
            <li><CheckSquare size={18} /> Bookings</li>
            <li><Ticket size={18} /> Events</li>
          </ul>
      </div>
      <div className="navbar-bottom">
        <button className="sign-out-btn">
          <LogOut size={18} />
          Sign Out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
