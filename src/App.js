import React, { useState } from 'react';
import './App.css';

import AddItem from './Components/AddItem';
import Item from './Components/Item';
import TotalPrice from './Components/TotalPrice';

function App() {
  const [items, setItems] = useState([]);

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <div className="App">
      <h1>Product List</h1>
      <AddItem onAddItem={handleAddItem} />
      <div className="items-list">
        {items.map((item, index) => (
          <Item key={index} name={item.name} price={item.price} />
        ))}
      </div>
      <TotalPrice items={items} />
    </div>
  );
}

export default App;
