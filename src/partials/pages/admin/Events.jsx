import React, { useEffect, useState } from "react";
import EventCard from "../../../components/Events/EventCard";
import './Events.css';


const Events = () => {
  const [events, setEvents] = useState([]);
  const [viewMode, setViewMode] = useState("grid"); // grid eller listvy

  // Hämta (mockade) eventdata efter komponenten mountas
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
          status: "Draft",
          ticketsSold: 65,
          totalTickets: 200,
          imageUrl: "/assets/images/adventure.jpg",
        },
        {
          id: "3",
          eventName: "Teaterkväll",
          category: "Kultur",
          startDateTime: "2025-06-20T19:00:00",
          location: "Malmö",
          price: 199,
          status: "Past",
          ticketsSold: 65,
          totalTickets: 200,
          imageUrl: "/assets/images/adventure.jpg",
        },
        {
          id: "4",
          eventName: "Test",
          category: "Test",
          startDateTime: "2025-06-20T19:00:00",
          location: "Test",
          price: 123,
          status: "Past",
          ticketsSold: 65,
          totalTickets: 200,
          imageUrl: "/assets/images/adventure.jpg",
        },
        {
          id: "5",
          eventName: "Test",
          category: "Test",
          startDateTime: "2025-06-20T19:00:00",
          location: "Test",
          price: 123,
          status: "Past",
          ticketsSold: 65,
          totalTickets: 200,
          imageUrl: "/assets/images/adventure.jpg",
        },
        {
          id: "6",
          eventName: "Test",
          category: "Test",
          startDateTime: "2025-06-20T19:00:00",
          location: "Test",
          price: 123,
          status: "Past",
          ticketsSold: 65,
          totalTickets: 200,
          imageUrl: "/assets/images/adventure.jpg",
        },
        {
          id: "7",
          eventName: "Test",
          category: "Test",
          startDateTime: "2025-06-20T19:00:00",
          location: "Test",
          price: 123,
          status: "Past",
          ticketsSold: 65,
          totalTickets: 200,
          imageUrl: "/assets/images/adventure.jpg",
        },
        {
          id: "8",
          eventName: "Test",
          category: "Test",
          startDateTime: "2025-06-20T19:00:00",
          location: "Test",
          price: 123,
          status: "Past",
          ticketsSold: 65,
          totalTickets: 200,
          imageUrl: "/assets/images/adventure.jpg",
        },
      ]);
    }, 500); // Simulerar fördröjning vid API-anrop

    return () => clearTimeout(timer); // Cleanup om komponent tas bort
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      {/* Titel + Vyväxling */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <h1 className="h2">Alla Event</h1>

        {/* Vyväxlare (Grid / Lista) */}
        <div>
          <button
            className={`button ${
              viewMode === "grid" ? "button-primary" : "button-secondary"
            }`}
            onClick={() => setViewMode("grid")}
          >
            Grid
          </button>
          <button
            className={`button ${
              viewMode === "list" ? "button-primary" : "button-secondary"
            }`}
            style={{ marginLeft: "0.5rem" }}
            onClick={() => setViewMode("list")}
          >
            Lista
          </button>
        </div>
      </div>

      {/* Laddar... */}
      {events.length === 0 && <p>Laddar event...</p>}

      {/* Lista av EventCards */}
      <div className={viewMode === "grid" ? "event-grid" : "event-list"}>
        {events.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            isAdmin={true}
            viewMode={viewMode}
          />
        ))}
      </div>
    </div>
  );
};

export default Events;

