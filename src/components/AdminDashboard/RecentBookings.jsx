import React, { useState } from 'react';
import './RecentBookings.css';
import { FaSearch, FaChevronDown, FaChevronUp } from 'react-icons/fa';

// Byt ut mockdata mot hämtning från API senare
const mockBookings = [
  {
    invoiceId: 'INV10011',
    date: '2029/02/15 10:30 AM',
    name: 'Jackson Moore',
    event: 'Symphony Under the Stars',
    category: 'Music',
    qty: 2,
    amount: '$100',
    status: 'Confirmed',
  },
  {
    invoiceId: 'INV10012',
    date: '2029/02/16 06:35 PM',
    name: 'Alicia Smithson',
    event: 'Runway Revolution 2024',
    category: 'Fashion',
    qty: 1,
    amount: '$120',
    status: 'Pending',
  },
  {
    invoiceId: 'INV10013',
    date: '2029/02/17 01:15 PM',
    name: 'Marcus Rawless',
    event: 'Global Wellness Summit',
    category: 'Beauty & Wellness',
    qty: 3,
    amount: '$240',
    status: 'Confirmed',
  },
  {
    invoiceId: 'INV10014',
    date: '2029/02/18 09:00 AM',
    name: 'Patrick Cooper',
    event: 'Champions League Screening Night',
    category: 'Sport',
    qty: 4,
    amount: '$120',
    status: 'Cancelled',
  },
  {
    invoiceId: 'INV10015',
    date: '2029/02/18 05:30 PM',
    name: 'Gilda Ramos',
    event: 'Artistry Unveiled: Modern Art Expo',
    category: 'Art & Design',
    qty: 2,
    amount: '$50',
    status: 'Confirmed',
  },
];

const RecentBookings = () => {
  const [bookings] = useState(mockBookings); 

  return (
    <div className="recent-bookings card">
      <div className="recent-bookings-header">
        <h2 className="h4">Recent Bookings</h2>
        <div className="recent-bookings-controls">

          <div className="search-wrapper">
            <input
              type="text"
              className="recent-bookings-search"
              placeholder="Search name, event, etc"
            />
            <FaSearch className="search-icon right" />
          </div>

          <button className="week-filter">
            This Week <FaChevronDown className="chevron-icon" />
          </button>

        </div>
      </div>

      <table className="bookings-table">
        <thead>
          <tr>
            {['Invoice ID', 'Date', 'Name', 'Event', 'Qty', 'Amount', 'Status'].map((header, idx) => (
              <th key={idx}>
                {header}
                <span className="sort-icons-vertical">
                  <FaChevronUp className="column-icon" />
                  <FaChevronDown className="column-icon" />
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {bookings.map((b, index) => (
            <tr key={index}>
              <td>{b.invoiceId}</td>
              <td>
                <div className="booking-date">{b.date.split(' ')[0]}</div>
                <div className="booking-time">{b.date.split(' ')[1] + ' ' + b.date.split(' ')[2]}</div>
              </td>
              <td>{b.name}</td>
              <td>
                {b.event}
                <div className="category">{b.category}</div>
              </td>
              <td>{b.qty}</td>
              <td>{b.amount}</td>
              <td>
                <span className={`status-badge ${b.status.toLowerCase()}`}>
                  {b.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentBookings;
