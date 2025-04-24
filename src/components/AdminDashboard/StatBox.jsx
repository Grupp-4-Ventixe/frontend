import React from 'react';
import './StatBox.css';
import { FaCalendarAlt, FaUserCheck, FaTicketAlt } from 'react-icons/fa';

const stats = [
  { icon: <FaCalendarAlt size={24} />, title: 'Upcoming Events', value: '345' },
  { icon: <FaUserCheck size={24} />, title: 'Total Bookings', value: '1798' },
  { icon: <FaTicketAlt size={24} />, title: 'Tickets Sold', value: '1250' }
];

const StatBox = () => {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      {stats.map((item, index) => (
        <div className="stat-box" key={index}>
          <div className="stat-icon">{item.icon}</div>
          <div className="stat-content">
            <h3 className="stat-value">{item.value}</h3>
            <p className="stat-title">{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatBox;
