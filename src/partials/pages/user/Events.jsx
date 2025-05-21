import React, { useEffect, useState } from "react";
import EventCard from "../../../components/Events/EventCard";
import EventFilters from "../../../components/Events/EventFilters";
import "./Events.css";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [viewMode, setViewMode] = useState("grid");
  const [statusFilter, setStatusFilter] = useState("Active");

  useEffect(() => {
    const timer = setTimeout(() => {
      setEvents([
        {
          id: "1",
          eventName: "ReactConf 2025",
          category: "Konferens",
          startDateTime: "2025-09-14T10:00:00",
          location: "Stockholm",
          price: 299,
          status: "Active",
          ticketsSold: 65,
          totalTickets: 200,
          imageUrl: "/src/assets/Testbild.jpg",
        },
        {
          id: "2",
          eventName: "Sommarmusikfest",
          category: "Musik",
          startDateTime: "2025-07-01T18:30:00",
          location: "Göteborg",
          price: 499,
          status: "Active",
          ticketsSold: 65,
          totalTickets: 200,
          imageUrl: "/src/assets/Testbild.jpg",
        },
        {
          id: "3",
          eventName: "Teaterkväll",
          category: "Kultur",
          startDateTime: "2025-06-20T19:00:00",
          location: "Malmö",
          price: 199,
          status: "Draft",
          ticketsSold: 65,
          totalTickets: 200,
          imageUrl: "/src/assets/Testbild.jpg",
        },
      ]);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const filteredEvents = events.filter((event) => event.status === statusFilter);
  const statusCounts = {
    Active: events.filter((e) => e.status === "Active").length,
    Draft: events.filter((e) => e.status === "Draft").length,
    Past: events.filter((e) => e.status === "Past").length,
  };

  return (
    <div className="events-container">
      <EventFilters
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        statusFilter={statusFilter}
        onStatusFilterChange={setStatusFilter}
        statusCounts={statusCounts}
      />

      {filteredEvents.length === 0 ? (
        <p>No events to show</p>
      ) : (
        <div className={viewMode === "grid" ? "event-grid" : "event-list"}>
          {filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              isAdmin={false} 
              viewMode={viewMode}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Events;
