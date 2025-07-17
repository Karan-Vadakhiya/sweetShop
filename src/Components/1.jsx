import React, { useState, useEffect } from 'react';


const [cartItems, setCartItems] = useState([]);

const handleAddToCart = (item) => {
  const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
  if (existingItem) {
    // Update quantity
    setCartItems(cartItems.map(cartItem =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: (cartItem.quantity || 1) + 1 }
        : cartItem
    ));
  } else {
    // Add new item
    setCartItems([...cartItems, { ...item, quantity: 1 }]);
  }
};

export default handleAddToCart