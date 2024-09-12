import React from "react";
import "./ItemDetailsModal.css"; // For styling the modal

function ItemDetailsModal({ item, isOpen, onClose }) {
  if (!isOpen) return null; // If the modal is not open, return null

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <div className="modal-main">
          {/* Left side: image */}
          <div className="modal-left">
            <img src={item.image} alt={item.title} className="modal-image" />
          </div>

          {/* Right side: details and buy now section */}
          <div className="modal-right">
            {/* Details Section */}
            <div className="item-details">
              <h2>{item.title}</h2>
              <p>{item.description}</p>

              <h3>Details</h3>
              <ul>
                <li>Closing Date: {item.closingDate}</li>
                <li>Location: {item.location}</li>
              </ul>

              <h3>Shipping & Pickup Options</h3>
              <table className="shipping-table">
                <tbody>
                  <tr>
                    <td>Destination & Description</td>
                    <td>{item.shippingOptions.destination}</td>
                  </tr>
                  <tr>
                    <td>Pick-up</td>
                    <td>{item.shippingOptions.pickup}</td>
                  </tr>
                  <tr>
                    <td>Shipping Fee</td>
                    <td>{item.shippingOptions.shippingFee}</td>
                  </tr>
                </tbody>
              </table>

              <h3>Payment Options</h3>
              <ul>
                {item.paymentOptions.map((option) => (
                  <li key={option}>{option}</li>
                ))}
              </ul>

              <h3>About the Seller</h3>
              <div className="seller-info">
                <p>Seller: {item.seller.name}</p>
                <p>Feedback: {item.seller.feedback}</p>
                <p>Location: {item.seller.location}</p>
                <p>Member Since: {item.seller.memberSince}</p>
                <a href="#">View seller’s other listings</a>
              </div>
            </div>

            {/* Buy Now Section */}
            <div className="buy-section">
              <h3>Buy Now</h3>
              <p className="price">{item.price}</p>
              <p className="availability">10+ available</p>
              <div className="buy-section-buttons">
                <button className="buy-btn">Buy Now</button>
                <button className="add-cart-btn">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetailsModal;
