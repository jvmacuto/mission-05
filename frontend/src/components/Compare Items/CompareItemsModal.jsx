import React from "react";
import Modal from "react-modal";
import "./CompareItemsModal.css";

Modal.setAppElement("#root");

const CompareItemsModal = ({ isOpen, onRequestClose, comparedItems }) => {
  const handlePlaceBid = (item) => {
    // Implement the logic to place a bid here
    alert(`Bid placed on ${item.title}`);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Compare Items Modal"
      className="modal"
      overlayClassName="overlay"
    >
      <button className="close-button" onClick={onRequestClose}>
        &times;
      </button>
      <h2>Compared Items</h2>
      <div className="compare-items">
        {comparedItems.map((item, index) => (
          <div key={index} className="item">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>Starting Price: ${item.starting_price}</p>
            <p>Reserve Price: ${item.reserve_price}</p>
            <button onClick={() => handlePlaceBid(item)}>Place Bid</button>
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default CompareItemsModal;
