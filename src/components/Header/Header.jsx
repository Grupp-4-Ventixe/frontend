import './Header.css';
import { Bell, Settings, Search } from 'lucide-react';

/**
 * Props:
 * - title: huvudrubrik (t.ex. "Dashboard", "Bookings")
 * - breadcrumb: valfri breadcrumb-text, visas som "Dashboard / [breadcrumb]"
 */

// TODO: Gör breadcrumb dynamisk utifrån aktuell sida när routing är på plats
// TODO: Gör notification-dot togglable via props

const Header = ({ title = 'Dashboard', breadcrumb }) => {
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
            <p className="user-name">Orlando Laurentius</p>
            <p className="user-role">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

