// AddItem.js
import React, { useState } from 'react';

function AddItem({ onAddItem }) {
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');

  const handleAddItem = () => {
    if (itemName && itemPrice) {
      onAddItem({ name: itemName, price: parseFloat(itemPrice) });
      setItemName('');
      setItemPrice('');
    }
  };

  return (
    <div className="add-item">
      <input
        type="text"
        placeholder="Item Name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Item Price"
        value={itemPrice}
        onChange={(e) => setItemPrice(e.target.value)}
      />
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
}

export default AddItem;
