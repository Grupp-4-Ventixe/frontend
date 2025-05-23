import React, { useState } from 'react';
import './MerchandiseSection.css';
import EditMerchModal from './EditMerchModal';

const dummyMerch = [
  { name: 'Echo Beats Cap', price: 20 },
  { name: 'Festival T-Shirt', price: 25 },
  { name: 'Light-Up Wristband', price: 15 },
];

const MerchandiseSection = ({ isAdmin = true, merchandise = dummyMerch }) => {
  const [editItem, setEditItem] = useState(null);
  const [merchList, setMerchList] = useState(merchandise);
  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  const toggleMenu = (index) => {
    setOpenMenuIndex(prev => (prev === index ? null : index));
  };

  const handleEdit = (item) => {
    setEditItem(item);
    setOpenMenuIndex(null);
  };

  const handleDelete = (item) => {
    setMerchList(prev => prev.filter(m => m.name !== item.name));
    setOpenMenuIndex(null);
  };

  const handleSave = (updatedItem) => {
    setMerchList(prev =>
      prev.map(m => m.name === updatedItem.name ? updatedItem : m)
    );
    setEditItem(null);
  };

  return (
    <section className="merch-section">
      <div className="merch-header">
        <h2>Official Merchandise</h2>
      </div>

      <div className="merch-grid">
        {merchList.map((item, index) => (
          <div className="merch-card" key={index}>
            <div className="image-placeholder" />
            <div className="merch-info">
              <p className="merch-name">{item.name}</p>
              <p className="merch-price">USD ${item.price}</p>
            </div>

            {isAdmin && (
              <div className="card-menu">
                <button className="dots-btn" onClick={() => toggleMenu(index)}>⋯</button>
                {openMenuIndex === index && (
                  <div className="merch-dropdown">
                    <button onClick={() => handleEdit(item)}>Edit</button>
                    <button onClick={() => handleDelete(item)}>Delete</button>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {isAdmin && editItem && (
        <EditMerchModal
          merch={editItem}
          onClose={() => setEditItem(null)}
          onSave={handleSave}
        />
      )}
    </section>
  );
};

export default MerchandiseSection;
