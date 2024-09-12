import React from "react";
import Modal from "react-modal";
import "./CompareItemsModal.css";

Modal.setAppElement("#root");

const CompareItemsModal = ({
  isOpen,
  onRequestClose,
  comparedItems,
  bids,
  handlePlaceBid,
}) => {
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
            <p>{bids[item.title] ? "Bid placed" : "No bid placed"}</p>
            <button onClick={() => handlePlaceBid(item)}>
              {bids[item.title] ? "Cancel Bid" : "Place Bid"}
            </button>
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default CompareItemsModal;
