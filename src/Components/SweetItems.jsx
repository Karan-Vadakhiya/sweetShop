import React, { useState, useEffect } from 'react';

const SweetItems = ({ sweets, addToCart }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSweets, setFilteredSweets] = useState(sweets);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [priceSort, setPriceSort] = useState('');

  useEffect(() => {
    let filtered = sweets.filter(sweet =>
      sweet.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!categoryFilter || sweet.category === categoryFilter)
    );

    if (priceSort === 'lowToHigh') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (priceSort === 'highToLow') {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredSweets(filtered);
  }, [searchTerm, sweets, categoryFilter, priceSort]);

  const uniqueCategories = [...new Set(sweets.map(s => s.category))];

 

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>Available Sweets</h2>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px', gap: '10px' }}>
        <input
          type="text"
          placeholder="Search sweets..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          style={{ padding: '8px', width: '200px' }}
        />

        <select
          value={categoryFilter}
          onChange={e => setCategoryFilter(e.target.value)}
          style={{ padding: '8px' }}
        >
          <option value="">All Categories</option>
          {uniqueCategories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <select
          value={priceSort}
          onChange={e => setPriceSort(e.target.value)}
          style={{ padding: '8px' }}
        >
          <option value="">Sort by Price</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '20px'
      }}>
        {filteredSweets.slice(0, 16).map((sweet, index) => (
          <div key={index} style={{
            border: '1px solid #ccc',
            borderRadius: '10px',
            padding: '16px',
            textAlign: 'center',
            backgroundColor: '#fff'
          }}>
            <h3>{sweet.name}</h3>
            <p>Category: {sweet.category}</p>
            <p>Price: ₹{sweet.price}</p>
            <p>Weight: {sweet.weight} g</p>
            <button onClick={() => addToCart(sweet)} style={{ marginTop: '10px', padding: '6px 12px' }}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SweetItems;

