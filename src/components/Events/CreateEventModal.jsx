//Tagit hjälp av chatGPT 4o
import React, { useState } from "react";
import "./CreateEventModal.css";
import { createEvent } from "../../api/events";

const CreateEventModal = ({ isOpen, onClose, onEventCreated }) => {
  const [formData, setFormData] = useState({
    eventName: "",
    category: "",
    imageUrl: "https://placehold.co/300x200?text=Event+Image",
    startDateTime: "",
    endDateTime: "",
    location: "",
    description: "",
    price: 0,
    status: "Draft"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newEvent = {
      eventName: formData.eventName,
      category: formData.category,
      imageUrl: formData.imageUrl || null,
      startDateTime: formData.startDateTime,
      endDateTime: formData.endDateTime || null,
      location: formData.location,
      description: formData.description,
      price: parseFloat(formData.price),
      status: formData.status
    };

    const success = await createEvent(newEvent);
    if (success) {
      onEventCreated(); 
      onClose(); 
    }
  };

  if (!isOpen) return null;

  return (
    <div className="create-event-modal-overlay">
      <div className="create-event-modal">
        <button type="button" className="btn close" onClick={onClose}>X</button>
        <h2 className="modal-title">Create New Event</h2>

        <form className="modal-form" onSubmit={handleSubmit}>
          <label>
            Event Name
            <input name="eventName" type="text" value={formData.eventName} onChange={handleChange} className="input" required />
          </label>
          <label>
            Category
            <input name="category" type="text" value={formData.category} onChange={handleChange} className="input" required />
          </label>
          <label>
            Image URL
            <input name="imageUrl" type="url" value={formData.imageUrl} onChange={handleChange} className="input" />
          </label>
          <div className="date-row">
            <label>
              Start Date
              <input name="startDateTime" type="datetime-local" value={formData.startDateTime} onChange={handleChange} className="input" required />
            </label>
            <label>
              End Date
              <input name="endDateTime" type="datetime-local" value={formData.endDateTime} onChange={handleChange} className="input" />
            </label>
          </div>
          <label>
            Location
            <input name="location" type="text" value={formData.location} onChange={handleChange} className="input" required />
          </label>
          <label>
            Description
            <textarea name="description" value={formData.description} onChange={handleChange} className="textarea" required />
          </label>
          <label>
            Price
            <input name="price" type="number" min="0" value={formData.price} onChange={handleChange} className="input" required />
          </label>
          <label>
            Status
            <select name="status" value={formData.status} onChange={handleChange} className="input">
              <option value="Draft">Draft</option>
              <option value="Active">Active</option>
              <option value="Past">Past</option>
            </select>
          </label>

          <div className="modal-actions">
            <button type="button" className="btn cancel" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn create">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEventModal;
