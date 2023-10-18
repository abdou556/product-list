// Item.js
import React from 'react';

function Item({ name, price }) {
  return (
    <div className="item">
      <div className="item-name">{name}</div>
      <div className="item-price">${price.toFixed(2)}</div>
    </div>
  );
}

export default Item;
