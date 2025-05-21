import React, { useState } from "react";
import "./EventCard.css";

const EventCard = ({ event, isAdmin, viewMode = "grid", onEdit, onDelete, onClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const {
    eventName,
    category,
    location,
    price,
    status,
    startDateTime,
    ticketsSold,
    totalTickets,
    imageUrl,
  } = event;

  const percentageSold = Math.round((ticketsSold / totalTickets) * 100);

   const handleEdit = () => {
    setMenuOpen(false); 
    onEdit?.(event.id); 
  };

  const handleDelete = () => {
    setMenuOpen(false);
    onDelete?.(event.id);
  };

  return (
    <div className={`event-card ${viewMode}`} onClick={onClick}>
      <div className="event-image-wrapper">
        <img src={imageUrl} alt={eventName} className="event-image" />
        <div className="event-tags">
          <span className="category-badge">{category}</span>
          <span className={`status-badge ${status?.toLowerCase()}`}>{status}</span>
        </div>
      </div>

      <div className="event-info">
        <div className="event-date-row">
          <p className="event-date">
            {new Date(startDateTime).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric"
                })}{" "}
                –{" "}
                {new Date(startDateTime).toLocaleTimeString("en-US", {
                  hour: "numeric",
                  minute: "2-digit",
                  hour12: true
                })}
          </p>

          {isAdmin && (
            <div className="event-options-wrapper" onClick={(e) => e.stopPropagation()}>
              <button
                className="ellipsis-button"
                onClick={() => setMenuOpen((prev) => !prev)}
              >
                ...
              </button>
              {menuOpen && (
                <div className="card-menu">
                  <button onClick={handleEdit}>Edit</button>
                  <button onClick={handleDelete}>Delete</button>
                </div>
              )}
            </div>
          )}
        </div>

        <h3 className="event-title">{eventName}</h3>
        <p className="event-location">{location}</p>

        <div className="event-meta">
          <div className="progress-bar-wrapper">
            <div className="progress-bar" style={{ width: `${percentageSold}%` }}></div>
          </div>
          <span className="percentage">{percentageSold}%</span>
          <div className="event-price">${price}</div>
        </div>
      </div>
    </div>
  );
};


export default EventCard;