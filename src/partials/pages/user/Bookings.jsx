import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Bookings.css";

const Bookings = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    eventId: id,
    firstName: "",
    lastName: "",
    email: "",
    streetName: "",
    postalCode: "",
    city: "",
    ticketQuantity: 1,
  });

  const [message, setMessage] = useState("");

  useEffect(() => {
    setFormData((prev) => ({ ...prev, eventId: id }));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "ticketQuantity" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://ventixe-4-bookingservice.azurewebsites.net/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setMessage("Bokningen lyckades!");
        navigate("/events"); 
      } else {
        setMessage("Bokningen misslyckades.");
      }
    } catch (err) {
      console.error("Booking error:", err);
      setMessage("Något gick fel.");
    }
  };

  return (
    <div className="booking-container">
      <h2 className="h3">Book event</h2>

      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <label>First Name</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>E-mail</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Street Name</label>
          <input type="text" name="streetName" value={formData.streetName} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Postal Code</label>
          <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>City</label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Ticket Quantity</label>
          <input type="number" name="ticketQuantity" min="1" value={formData.ticketQuantity} onChange={handleChange} required />
        </div>

        <button type="submit" className="btn-primary">Book</button>
      </form>

      {message && <p className="booking-message">{message}</p>}
    </div>
  );
};

export default Bookings;
