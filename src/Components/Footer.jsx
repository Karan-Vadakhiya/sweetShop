import React from 'react';

const Footer = () => {
  const footerStyle = {
    textAlign: 'center',
    padding: '12px',
    backgroundColor: '#ffeff0',
    borderTop: '1px solid #ffc0cb',
    marginTop: '20px',
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; 2025 Kata: Sweet Shop Management System. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
