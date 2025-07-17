import React from 'react';

const Navbar = ({ cartItemCount, onCartClick, onInventoryClick }) => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      backgroundColor: '#f8f8f8',
      borderBottom: '2px solid #ccc'
    }}>
      <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#d35400', fontFamily: 'cursive' }}>
         Kata
      </div>

      <div>
        <button onClick={onInventoryClick} style={{ marginRight: '20px', padding: '8px 16px' }}>
          Manage Inventory
        </button>
        <button onClick={onCartClick} style={{ position: 'relative', padding: '8px 16px' }}>
          Cart 
          {cartItemCount > 0 && (
            <span style={{
              position: 'absolute',
              top: '-8px',
              right: '-8px',
              backgroundColor: 'red',
              color: 'white',
              borderRadius: '50%',
              padding: '4px 8px',
              fontSize: '12px'
            }}>
              {cartItemCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
