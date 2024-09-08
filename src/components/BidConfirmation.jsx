import React from "react";
import "./BidConfirmation.css"; // CSS for bid confirmation styling

function BidConfirmation({ product }) {
  const handleConfirmBid = () => {
    // Handle bid confirmation logic (e.g., API call)
    alert("Bid placed successfully!");
  };

  return (
    <div className="bid-confirmation">
      <h2>Confirm Your Bid</h2>
      <div className="bid-details">
        <img src={product.imageUrl} alt={product.title} />
        <h3>{product.title}</h3>
        <p>Current Bid: ${product.currentBid}</p>
        <button onClick={handleConfirmBid}>Confirm Bid</button>
        <button onClick={() => window.history.back()}>Cancel</button>
      </div>
    </div>
  );
}

export default BidConfirmation;
