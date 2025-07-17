import React, { useState } from 'react';

const Inventory = ({ isOpen, onClose, onAddItem, onDeleteItem, onUpdateItem }) => {
  const [formData, setFormData] = useState({ name: '', price: '', category: '', quantity: '' });

  if (!isOpen) return null;

  const popupStyle = {
    position: 'fixed',
    top: 0, left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  };

  const boxStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '12px',
    width: '400px',
  };

  const inputStyle = {
    width: '100%',
    margin: '6px 0',
    padding: '8px',
    borderRadius: '6px',
    border: '1px solid #ccc',
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (onAddItem) onAddItem(formData);
    setFormData({ name: '', price: '', category: '', quantity: '' });
  };

  const handleUpdate = () => {
    if (onUpdateItem) onUpdateItem(formData);
  };

  const handleDelete = () => {
    if (onDeleteItem) onDeleteItem(formData.name);
  };

  return (
    <div style={popupStyle} onClick={onClose}>
      <div style={boxStyle} onClick={e => e.stopPropagation()}>
        <h2>Manage Inventory</h2>
        <input
          style={inputStyle}
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Sweet Name"
        />
        <input
          style={inputStyle}
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category"
        />
        <input
          style={inputStyle}
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
          type="number"
        />
        <input
          style={inputStyle}
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          placeholder="Quantity"
          type="number"
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
          <button onClick={handleAdd}>Add</button>
          <button onClick={handleUpdate}>Update</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
        <button onClick={onClose} style={{ marginTop: '10px' }}>Close</button>
      </div>
    </div>
  );
};

export default Inventory;
