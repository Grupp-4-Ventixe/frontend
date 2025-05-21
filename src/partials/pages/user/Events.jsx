import React, { useEffect, useState } from "react";
import EventCard from "../../../components/Events/EventCard";
import EventFilters from "../../../components/Events/EventFilters";
import { fetchAllEvents } from "../../../api/events"; 
import "./Events.css";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [viewMode, setViewMode] = useState("grid");
  const [statusFilter, setStatusFilter] = useState("Active");

  useEffect(() => {
    const loadEvents = async () => {
      const data = await fetchAllEvents();
      const onlyActive = data.filter((event) => event.status === "Active");
      setEvents(onlyActive);
    };
    loadEvents();
  }, []);

  const filteredEvents = events.filter((event) => event.status === statusFilter);

  const statusCounts = {
    Active: filteredEvents.length,
  };

  return (
    <div className="events-container">
      <EventFilters
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        statusFilter={statusFilter}
        onStatusFilterChange={setStatusFilter}
        statusCounts={statusCounts}
        availableStatuses={["Active"]}
      />

      {filteredEvents.length === 0 ? (
        <p>No active events to show</p>
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
