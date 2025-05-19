import React from "react";
import "./CreateEventModal.css"; 

const CreateEventModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="create-event-modal-overlay">
      <div className="create-event-modal">
        <button type="button" className="btn close" onClick={onClose}>X</button>
        <h2 className="modal-title">Create New Event</h2>

        <form className="modal-form">
          <label>
            Event Name
            <input type="text" placeholder="Enter event name" className="input" />
          </label>

          <label>
            Category
            <input type="text" placeholder="Music, Conference..." className="input" />
          </label>

          <label>
            Image URL
            <input type="url" placeholder="https://example.com/image.jpg" className="input" />
          </label>

          <div className="date-row">
            <label>
              Start Date
              <input type="date" className="input" />
            </label>
            <label>
              End Date
              <input type="date" className="input" />
            </label>
          </div>

          <label>
            Location
            <input type="text" placeholder="City or venue" className="input" />
          </label>

          <label>
            Description
            <textarea placeholder="Event details..." className="textarea" />
          </label>

          <label>
            Price
            <input type="number" min="0" placeholder="0" className="input" />
          </label>

           <label>
            Status
            <select className="input">
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
