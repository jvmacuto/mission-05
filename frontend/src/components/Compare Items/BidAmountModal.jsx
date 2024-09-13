import React, { useState } from "react";
import Modal from "react-modal";
import "./BidAmountModal.css";

const BidAmountModal = ({ isOpen, onRequestClose, item, handlePlaceBid }) => {
  const [bidAmount, setBidAmount] = useState("");
  const [message, setMessage] = useState(""); // State to store the message

  const handleSubmit = async (e) => {
    e.preventDefault();
    const amount = parseFloat(bidAmount);

    if (amount < item.reserve_price) {
      alert(`Bid amount must be at least ${item.reserve_price}`);
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3000/api/bid/${item._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ bidAmount: amount }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to place bid");
      }

      const result = await response.json();
      console.log("Response from backend:", result); // Log the response from the backend
      setMessage(result.message); // Set the message from the backend
      handlePlaceBid(result, amount);
      onRequestClose();
    } catch (error) {
      console.error("Error placing bid:", error);
      alert("Failed to place bid. Please try again.");
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal-content"
      overlayClassName="modal-overlay"
      contentLabel="Bid Amount Modal"
    >
      <div className="modal-header">
        <h2>Place Bid for {item.title}</h2>
      </div>
      <form className="modal-form" onSubmit={handleSubmit}>
        <label>
          Bid Amount:
          <input
            type="number"
            value={bidAmount}
            onChange={(e) => setBidAmount(e.target.value)}
            min={item.reserve_price}
            required
          />
        </label>
        <button type="submit">Place Bid</button>
        <button type="button" onClick={onRequestClose}>
          Cancel
        </button>
      </form>
      {message && <p>{message}</p>} {/* Display the message */}
    </Modal>
  );
};

export default BidAmountModal;
