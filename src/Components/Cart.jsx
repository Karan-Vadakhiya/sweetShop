import React from 'react';

const Cart = ({ isOpen, onClose, cartItems = [] }) => {
  if (!isOpen) return null;

  const backdropStyle = {
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

  const popupStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '12px',
    width: '400px',
    maxHeight: '80vh',
    overflowY: 'auto',
  };

  const itemStyle = {
    borderBottom: '1px solid #ddd',
    marginBottom: '10px',
    paddingBottom: '10px',
  };

  return (
    <div style={backdropStyle} onClick={onClose}>
      <div style={popupStyle} onClick={e => e.stopPropagation()}>
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>No items in the cart.</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} style={itemStyle}>
              <p><strong>Name:</strong> {item.name}</p>
              <p><strong>Category:</strong> {item.category}</p>
              <p><strong>Quantity:</strong> {item.quantity}</p>
              <p><strong>Price:</strong> ₹{item.price}</p>
            </div>
          ))
        )}
        <button onClick={onClose} style={{ marginTop: '10px', padding: '6px 12px' }}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Cart;
