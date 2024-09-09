import React from "react";
import "./Compare.css"; // CSS for comparison styling

function Compare({ selectedItems }) {
  return (
    <div className="compare-section">
      <h2>Compare Selected Items</h2>
      <div className="compare-grid">
        {selectedItems.map((item) => (
          <div key={item.id} className="compare-card">
            <img src={item.imageUrl} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.price}</p>
            <p>{item.condition}</p>
            <p>{item.sellerRating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Compare;
