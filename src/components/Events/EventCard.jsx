import React from "react";
import "./EventCard.css";

const EventCard = ({ event, isAdmin, viewMode = "grid", onEdit, onDelete, onClick }) => {
  const {
    eventName,
    category,
    location,
    price,
    status,
    startDateTime,
    ticketsSold,
    totalTickets,
    imageUrl
  } = event;

  const percentageSold = Math.round((ticketsSold / totalTickets) * 100);

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
        <p className="event-date">
          {new Date(startDateTime).toLocaleDateString()} –{" "}
          {new Date(startDateTime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </p>
        <h3 className="event-title">{eventName}</h3>
        <p className="event-location">{location}</p>

        <div className="event-meta">
          <div className="progress-bar-wrapper">
            <div className="progress-bar" style={{ width: `${percentageSold}%` }}></div>
          </div>
          <span className="percentage">{percentageSold}%</span>
          <div className="event-price">${price}</div>
        </div>

        {isAdmin && (
          <div className="event-actions">
            <button
              className="btn-edit"
              onClick={(e) => {
                e.stopPropagation();
                onEdit?.(event.id);
              }}
            >
              Edit
            </button>
            <button
              className="btn-delete"
              onClick={(e) => {
                e.stopPropagation();
                onDelete?.(event.id);
              }}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventCard;
