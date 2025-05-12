import './Navbar.css';
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
          <li><LayoutDashboard size={18} /> Dashboard</li>
          <li><CalendarDays size={18} /> Events</li>

          {isAdmin ? (
            <>
              <li><CheckSquare size={18} /> Bookings</li>
              <li><CreditCard size={18} /> Invoices</li>
            </>
          ) : (
            <li><Ticket size={18} /> Your tickets</li>
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

