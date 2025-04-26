import './Header.css';
import { Bell, Settings, Search } from 'lucide-react';

/**
 * Props:
 * - title: huvudrubrik (t.ex. "Dashboard", "Bookings")
 * - breadcrumb: valfri breadcrumb-text, visas som "Dashboard / [breadcrumb]"
 * - userName: namn på inloggad användare (t.ex. "Orlando Laurentius")
 * - userRole: roll för inloggad användare (t.ex. "Admin")
 */

// TODO: Gör breadcrumb dynamisk utifrån aktuell sida när routing är på plats
// TODO: Gör notification-dot togglable via props
// TODO: Koppla userName och userRole till auth/data när användarinloggning är på plats

const Header = ({ title = 'Dashboard', breadcrumb, userName = 'Orlando Laurentius', userRole = 'Admin' }) => {
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

