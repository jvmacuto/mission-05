import React from "react";
import "./ItemDetailsModal.css"; // Link to the updated CSS file

function ItemDetailsModal({ item, isOpen, onClose }) {
  if (!isOpen) return null; // Don't render if the modal is not open

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <div className="modal-main">
          {/* Left side: Image */}
          <div className="modal-left">
            <img src={item.image} alt={item.title} className="modal-image" />
          </div>

          {/* Right side: details and buy now section */}
          <div className="modal-right">
            {/* Left side inside modal-right: Information */}
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

            {/* Right side inside modal-right: Buy Now section */}
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
