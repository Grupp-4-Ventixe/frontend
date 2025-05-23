import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchEventById } from "../../../api/events"

import EventDetailsCard from "../../../components/EventDetails/EventDetailsCard";
import TermsAndConditions from "../../../components/EventDetails/TermsAndConditions";
import MerchandiseSection from "../../../components/EventDetails/MerchandiseSection";
import EventPackages from "../../../components/EventDetails/EventPackages";
import SeatPlanSection from "../../../components/EventDetails/SeatPlanSection";

import "./EventDetails.css";

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const loadEvent = async () => {
      const data = await fetchEventById(id);
      setEvent(data);
    };

    loadEvent();
  }, [id]);

  if (!event) return <p>Laddar event...</p>;

  return (
    <div className="event-details-layout">
      <div className="left-column">
        <EventDetailsCard event={event} />

        <TermsAndConditions terms={event.termsAndConditions} />
        <MerchandiseSection merchandise={event.merchandise} />
      </div>

      <div className="right-column">
        <SeatPlanSection seatPlan={event.seatPlan} />
        <EventPackages packages={event.packages} />
      </div>
    </div>
  );
};

export default EventDetails;
