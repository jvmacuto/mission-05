import React, { useEffect, useState } from "react";
import "./MyBidding.css";

function MyBidding() {
  const [bidDetails, setBidDetails] = useState([]);

  useEffect(() => {
    // Load bid details from local storage
    const savedBidDetails =
      JSON.parse(localStorage.getItem("bidDetails")) || [];
    setBidDetails(savedBidDetails);
  }, []);

  const handleRemoveBid = (item) => {
    setBidDetails((prevDetails) => {
      const updatedDetails = prevDetails.filter((i) => i.title !== item.title);
      localStorage.setItem("bidDetails", JSON.stringify(updatedDetails)); // Save to local storage
      return updatedDetails;
    });

    // Update the bids state in local storage
    const savedBids = JSON.parse(localStorage.getItem("bids")) || {};
    delete savedBids[item.title];
    localStorage.setItem("bids", JSON.stringify(savedBids));
  };

  return (
    <div className="my-bidding-container">
      <h1>My Bidding</h1>
      <div className="my-bid-details">
        {bidDetails.length > 0 ? (
          bidDetails.map((item, index) => (
            <div key={index} className="my-bid-item">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <p>Starting Price: ${item.starting_price}</p>
              <p>Reserve Price: ${item.reserve_price}</p>
              <button onClick={() => handleRemoveBid(item)}>Remove Bid</button>
            </div>
          ))
        ) : (
          <p>No bids placed</p>
        )}
      </div>
    </div>
  );
}

export default MyBidding;
