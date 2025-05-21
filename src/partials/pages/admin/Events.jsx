import React, { useEffect, useState } from "react";
import EventCard from "../../../components/Events/EventCard";
import EventFilters from "../../../components/Events/EventFilters";
import EventModal from "../../../components/Events/CreateEventModal";
import EditEventModal from "../../../components/Events/EditEventModal";
import { fetchAllEvents } from "../../../api/events"; 
import "./Events.css";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [viewMode, setViewMode] = useState("grid");
  const [statusFilter, setStatusFilter] = useState("Active");
  const [showModal, setShowModal] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState(null);

  useEffect(() => {
    const loadEvents = async () => {
      const data = await fetchAllEvents(); 
      setEvents(data);
    };

    loadEvents();
  }, []);

  const filteredEvents = events.filter((event) => event.status === statusFilter);
  const statusCounts = {
    Active: events.filter((e) => e.status === "Active").length,
    Draft: events.filter((e) => e.status === "Draft").length,
    Past: events.filter((e) => e.status === "Past").length,
  };
  const selectedEvent = events.find((e) => e.id === selectedEventId);

  const handleEdit = (eventId) => {
    setSelectedEventId(eventId);
    setIsEditModalOpen(true);
  };

  return (
    <div className="events-container">
      <div className="create-event-wrapper">
        <button className="create-event-btn" onClick={() => setShowModal(true)}>
          Create Event
        </button>
        <EventModal isOpen={showModal} onClose={() => setShowModal(false)} />
      </div>

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
              isAdmin={true}
              viewMode={viewMode}
              onEdit={handleEdit}
            />
          ))}
        </div>
      )}

      <EditEventModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        event={selectedEvent}
      />
    </div>
  );
};

export default Events;
