import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, CalendarDays, Ticket, CheckSquare, CreditCard, LogOut } from 'lucide-react';
import VentixeLogo from '../../assets/ventixe-logo.svg';

// TODO: Byt ut isAdmin-prop mot faktisk roll från autentisering när auth är på plats
const Navbar = ({ isAdmin = false }) => {
  return (
    <nav className="navbar">
      <div className="navbar-top">
        <div className="logo">
          <img src={VentixeLogo} alt="Ventixe logo" className="logo-img" />
        </div>

        <ul className="nav-links">
          {isAdmin ? (
            <>
              <NavLink to="/admin/dashboard" className={({ isActive }) => isActive ? 'active' : ''}>
                <LayoutDashboard size={18} /> Dashboard
              </NavLink>
              <NavLink to="/admin/events" className={({ isActive }) => isActive ? 'active' : ''}>
                <CalendarDays size={18} /> Events
              </NavLink>
              <NavLink to="/admin/bookings" className={({ isActive }) => isActive ? 'active' : ''}>
                <CheckSquare size={18} /> Bookings
              </NavLink>
              <NavLink to="/admin/invoices" className={({ isActive }) => isActive ? 'active' : ''}>
                <CreditCard size={18} /> Invoices
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'active' : ''}>
                <LayoutDashboard size={18} /> Dashboard
              </NavLink>
              <NavLink to="/events" className={({ isActive }) => isActive ? 'active' : ''}>
                <CalendarDays size={18} /> Events
              </NavLink>
              <NavLink to="/your-tickets" className={({ isActive }) => isActive ? 'active' : ''}>
                <Ticket size={18} /> Your tickets
              </NavLink>
            </>
          )}
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