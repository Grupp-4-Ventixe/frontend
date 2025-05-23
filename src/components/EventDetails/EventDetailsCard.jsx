import React from "react";
import "./EventDetailsCard.css";

const EventDetailsCard = ({ event }) => {
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
    description,
  } = event;

  const formattedDate = new Date(startDateTime).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedTime = new Date(startDateTime).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <div className="event-details-card">
      <div className="event-details-image-wrapper">
        {imageUrl && (
          <img src={imageUrl} alt={eventName} className="event-details-image" />
        )}
        <div className="event-details-tags">
          <span className="category-badge">{category}</span>
          <span className={`status-badge ${status?.toLowerCase()}`}>{status}</span>
        </div>
      </div>

      <div className="event-details-info">
        <h2 className="event-details-title">{eventName}</h2>

        <p className="event-details-date">
          {formattedDate} – {formattedTime}
        </p>
        <p className="event-details-location">{location}</p>

        <div className="event-details-meta">
          <div className="event-details-progress-bar-wrapper">
            <div
              className="event-details-progress-bar"
              style={{ width: `${Math.round((ticketsSold / totalTickets) * 100)}%` }}
            ></div>
          </div>
          <span className="event-details-percentage">
            {ticketsSold} / {totalTickets} Tickets Sold
          </span>
          <div className="event-details-price">
            Starts from <strong>${price}</strong>
          </div>
        </div>

        {description && (
          <div className="event-details-description">
            <h4>About Event</h4>
            <p>{description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventDetailsCard;
