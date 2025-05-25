import './Header.css';
import { Bell, Settings, Search } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

/**
 * Header-komponent som visar:
 * - Dynamisk breadcrumb och sidrubrik baserat på aktuell URL
 * - Inloggad användares namn och roll (från AuthContext)
 * - Sökfält samt ikoner för notifikationer och inställningar
 *
 * TODO: Koppla hasNotification till riktig notification-data från backend eller context i framtiden.
 */

const breadcrumbMap = {
  '/dashboard': null,
  '/events': 'Events',
  '/your-tickets': 'Your Tickets',

  '/admin/dashboard': 'Admin Dashboard',
  '/admin/bookings': 'Admin Bookings',
  '/admin/events': 'Admin Events',
  '/admin/invoices': 'Admin Invoices',
};


const Header = ({
  hasNotification = false
}) => {
  const { user } = useAuth();
  const location = useLocation();
  const breadcrumb = breadcrumbMap[location.pathname] || null;
  const title = breadcrumb || 'Dashboard';

  return (
    <header className="header">
      <div className="header-left">
        {breadcrumb && (
          <p className="breadcrumb">
            <span>Dashboard</span> / {breadcrumb}
          </p>
        )}
        <h1 className="page-title">{title}</h1>
      </div>

      <div className="header-right">
        <div className="search">
          <input
            type="text"
            placeholder="Search anything"
            aria-label="Search"
          />
          <Search size={18} className="search-icon" />
        </div>

        <button
          className={`icon-button ${hasNotification ? 'has-notification' : ''}`}
          aria-label="Notifications"
        >
          <Bell size={20} />
          {hasNotification && <span className="notification-dot"></span>}
        </button>

        <button className="icon-button" aria-label="Settings">
          <Settings size={20} />
        </button>

        <div className="user-info">
          <div className="user-avatar" />
          <div>
            <p className="user-name">{user?.name || "Unknown user"}</p>
            <p className="user-role">{user?.role || "Unknown role"}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

