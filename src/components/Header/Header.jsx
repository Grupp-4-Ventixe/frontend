import './Header.css';
import { Bell, Settings, Search } from 'lucide-react';
import { useLocation } from 'react-router-dom';

/**
 * Props:
 * - title: huvudrubrik (t.ex. "Dashboard", "Bookings")
 * - userName: namn på inloggad användare (t.ex. "Orlando Laurentius")
 * - userRole: roll för inloggad användare (t.ex. "Admin")
 */

// TODO: Gör notification-dot togglable via props
// TODO: Koppla userName och userRole till auth/data när användarinloggning är på plats

const breadcrumbMap = {
  '/dashboard': null, 
  '/bookings': 'Bookings',
  '/admin/dashboard': 'Admin Dashboard',
  '/admin/bookings': 'Admin Bookings',
};

const Header = ({ title = 'Dashboard', userName = 'Orlando Laurentius', userRole = 'Admin' }) => {
  const location = useLocation();
  const breadcrumb = breadcrumbMap[location.pathname] || null;

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
          className="icon-button has-notification"
          aria-label="Notifications"
        >
          <Bell size={20} />
          <span className="notification-dot"></span>
        </button>

        <button className="icon-button" aria-label="Settings">
          <Settings size={20} />
        </button>

        <div className="user-info">
          <div className="user-avatar" />
          <div>
            <p className="user-name">{userName}</p>
            <p className="user-role">{userRole}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

