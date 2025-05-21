import React, { useState, useEffect } from "react";
import { updateEvent } from "../../api/events"; 
import "./EditEventModal.css";

const EditEventModal = ({ isOpen, onClose, event, onEventUpdated }) => {
  const [formData, setFormData] = useState({
    eventName: "",
    category: "",
    imageUrl: "https://placehold.co/300x200?text=Event+Image",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
    price: 0,
    status: "Draft",
  });

  useEffect(() => {
    if (event) {
      setFormData({
        eventName: event.eventName || "",
        category: event.category || "",
        imageUrl: event.imageUrl || "https://placehold.co/300x200?text=Event+Image",
        startDate: event.startDateTime?.split("T")[0] || "",
        endDate: event.endDateTime?.split("T")[0] || "",
        location: event.location || "",
        description: event.description || "",
        price: event.price || 0,
        status: event.status || "Draft",
      });
    }
  }, [event]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedEvent = {
        eventName: formData.eventName,
        category: formData.category,
        imageUrl: formData.imageUrl,
        startDateTime: formData.startDate,
        endDateTime: formData.endDate || null,
        location: formData.location,
        description: formData.description,
        price: parseFloat(formData.price),
        status: formData.status,
      };

      await updateEvent(event.id, updatedEvent);
      if (onEventUpdated) onEventUpdated(); 
      onClose();
    } catch (error) {
      console.error("Error updating event:", error);
    }
  };

  if (!isOpen || !event) return null;

  return (
    <div className="create-event-modal-overlay">
      <div className="create-event-modal">
        <button type="button" className="btn close" onClick={onClose}>
          X
        </button>
        <h2 className="modal-title">Edit Event</h2>

        <form className="modal-form" onSubmit={handleSubmit}>
          <label>
            Event Name
            <input name="eventName" value={formData.eventName} onChange={handleChange} className="input" />
          </label>
          <label>
            Category
            <input name="category" value={formData.category} onChange={handleChange} className="input" />
          </label>
          <label>
            Image URL
            <input name="imageUrl" value={formData.imageUrl} onChange={handleChange} className="input" />
          </label>

          <div className="date-row">
            <label>
              Start Date
              <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} className="input" />
            </label>
            <label>
              End Date
              <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} className="input" />
            </label>
          </div>

          <label>
            Location
            <input name="location" value={formData.location} onChange={handleChange} className="input" />
          </label>
          <label>
            Description
            <textarea name="description" value={formData.description} onChange={handleChange} className="textarea" />
          </label>
          <label>
            Price
            <input type="number" name="price" value={formData.price} onChange={handleChange} className="input" />
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
            <button type="button" className="btn cancel" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn create">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEventModal;
