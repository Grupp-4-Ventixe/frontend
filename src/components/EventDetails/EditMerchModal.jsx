import React, { useState, useEffect } from 'react';
import './EditMerchModal.css';

const EditMerchModal = ({ merch, onClose, onSave }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);

  useEffect(() => {
    if (merch) {
      setName(merch.name || '');
      setPrice(merch.price || 0);
    }
  }, [merch]);

  if (!merch) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...merch, name, price });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h3>Edit Merchandise</h3>
        <form onSubmit={handleSubmit}>
          <div className="modal-group">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="modal-group">
            <label>Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              min="0"
              required
            />
          </div>

          <div className="modal-actions">
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="save-btn">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditMerchModal;
