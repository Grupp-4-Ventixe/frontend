import React, { useEffect, useState } from "react";
import Evoucher from "../../../components/UserDashboard/Tickets/Evoucher";

// Genererat med GPT-4o, hämtar ticket data från TicketService via RESTful API

const YourTickets = () => {
  const [tickets, setTickets] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  // Fetch tickets from the backend
 useEffect(() => {
  const fetchTickets = async () => {
    try {
      const response = await fetch("https://ticketservice-fec7e9f6gqbdh0cv.swedencentral-01.azurewebsites.net/api/ticket"); 
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Fetched tickets:", data); 
      setTickets(data); 
    } catch (err) {
      console.error("Error fetching tickets:", err.message); 
      setError(err.message); 
    } finally {
      setLoading(false);
    }
  };

  fetchTickets();
}, []);

  // Render loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-bold">Loading your tickets...</p>
      </div>
    );
  }

  // Render error state
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-bold text-error">Error: {error}</p>
      </div>
    );
  }

  // Render tickets
 return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Your Tickets</h1>
      <Evoucher tickets={tickets} /> 
    </div>
  );
};

export default YourTickets;