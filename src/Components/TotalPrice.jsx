// TotalPrice.js
import React from 'react';

function TotalPrice({ items }) {
  const totalPrice = items.reduce((total, item) => total + item.price, 0);

  return (
    <div className="total-price">
      <strong>Total Price:</strong> ${totalPrice.toFixed(2)}
    </div>
  );
}

export default TotalPrice;
