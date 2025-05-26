import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchEventById } from "../../../api/events";

import EventDetailsCard from "../../../components/EventDetails/EventDetailsCard";
import TermsAndConditions from "../../../components/EventDetails/TermsAndConditions";
import MerchandiseSection from "../../../components/EventDetails/MerchandiseSection";
import EventPackages from "../../../components/EventDetails/EventPackages";
import SeatPlanSection from "../../../components/EventDetails/SeatPlanSection";

import "./EventDetails.css";

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const loadEvent = async () => {
      const data = await fetchEventById(id);
      setEvent(data);
    };

    loadEvent();
  }, [id]);

  const handleBookClick = () => {
    navigate(`/bookings/${id}`);
  };

  if (!event) return <p>Loading event...</p>;

  return (
    <div className="event-details-layout">
      <div className="left-column">
        <EventDetailsCard event={event} /> 
        <div className="book-btn-container" style={{ marginTop: "2rem" }}>
          <button className="btn-primary" onClick={handleBookClick}>
            Book event
          </button>
        </div>
        <TermsAndConditions terms={event.termsAndConditions} />
        <MerchandiseSection merchandise={event.merchandise} />
      </div>

      <div className="right-column">
        <SeatPlanSection seatPlan={event.seatPlan} />
        <EventPackages packages={event.packages} isAdmin={false} />

       
      </div>
    </div>
  );
};

export default EventDetails;
