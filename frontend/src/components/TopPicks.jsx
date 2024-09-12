import React, { useState } from "react";
import "./TopPicks.css";

// Importing the images from your assets folder
import shelvingImage from "../assets/200x200x50cm Storage Shelving.jpg";
import palletrack from "../assets/palletrack.jpg";
import heavyduty from "../assets/HeavyDutyShelves.jpg";
import customwood from "../assets/CustomWoodenShelves.jpg";

const topPicksItems = [
  {
    id: 1,
    title: "200x200x50cm Storage Shelving",
    price: "$284.91",
    closingDate: "Tue, 10 Sep",
    location: "Auckland, NZ",
    image: shelvingImage,
    description:
      "Steel shelf, 735mm x 900mm, Powder-coated Grey, 1.5mm thick, 3 shelves on each level.",
    shippingOptions: {
      destination: "To be arranged",
      pickup: "Pick-up available from Auckland City, Auckland",
      shippingFee: "Free",
    },
    paymentOptions: ["Ping", "Cash", "NZ Bank Deposit"],
    seller: {
      name: "captainjake",
      feedback: "100% positive feedback (81 stars)",
      location: "Auckland City",
      memberSince: "Sunday, 30 December 2007",
    },
  },
  {
    id: 2,
    title: "Pallet Racking",
    price: "$595.00",
    closingDate: "Wed, 11 Sep",
    location: "Wellington, NZ",
    image: palletrack,
  },
  {
    id: 3,
    title: "Heavy-Duty Shelves",
    price: "$155.00",
    closingDate: "Sat, 7 Sep",
    location: "Christchurch, NZ",
    image: heavyduty,
  },
  {
    id: 4,
    title: "Custom Wooden Shelves",
    price: "$99.00",
    closingDate: "Thu, 8 Sep",
    location: "Hamilton, NZ",
    image: customwood,
  },
  {
    id: 5,
    title: "Industrial Workbench",
    price: "$499.99",
    closingDate: "Thu, 15 Sep",
    location: "Dunedin, NZ",
    image: "path_to_image",
  },
  {
    id: 6,
    title: "Heavy-Duty Tool Cabinet",
    price: "$399.99",
    closingDate: "Mon, 19 Sep",
    location: "Tauranga, NZ",
    image: "path_to_image",
  },
  {
    id: 7,
    title: "Mobile Tool Cart",
    price: "$699.99",
    closingDate: "Fri, 20 Sep",
    location: "Napier, NZ",
    image: "path_to_image",
  },
  {
    id: 8,
    title: "Portable Storage Unit",
    price: "$399.99",
    closingDate: "Sun, 21 Sep",
    location: "Palmerston North, NZ",
    image: "path_to_image",
  },
  {
    id: 9,
    title: "Warehouse Ladder",
    price: "$250.00",
    closingDate: "Mon, 22 Sep",
    location: "Rotorua, NZ",
    image: "path_to_image",
  },
  {
    id: 10,
    title: "Shelving Rack System",
    price: "$300.00",
    closingDate: "Tue, 23 Sep",
    location: "New Plymouth, NZ",
    image: "path_to_image",
  },
];

// Modal component to display detailed information
function ItemDetailsModal({ isOpen, onClose, item }) {
  if (!isOpen) return null;

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

          {/* Right side: Details */}
          <div className="modal-right">
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

            <div className="buy-section">
              <div className="buy-now-box">
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
    </div>
  );
}

function TopPicks() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  // State for modal
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle modal open
  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  // Handle modal close
  const closeModal = () => {
    setSelectedItem(null);
    setIsModalOpen(false);
  };

  const handleNext = () => {
    if (currentIndex < topPicksItems.length - itemsPerPage) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  return (
    <div className="top-picks-section">
      <h2>Top Picks for You</h2>
      <div className="carousel">
        <button
          className="carousel-btn prev"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          &#8249;
        </button>
        <div className="auction-grid">
          {topPicksItems
            .slice(currentIndex, currentIndex + itemsPerPage)
            .map((item) => (
              <div
                className="auction-item"
                key={item.id}
                onClick={() => openModal(item)}
              >
                <div className="auction-image-container">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="auction-details">
                  <h3>{item.title}</h3>
                  <p>{item.closingDate}</p>
                  <p>{item.location}</p>
                  <div className="price-container">
                    <span className="buy-now">Buy Now</span>
                    <p className="price">{item.price}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <button
          className="carousel-btn next"
          onClick={handleNext}
          disabled={currentIndex >= topPicksItems.length - itemsPerPage}
        >
          &#8250;
        </button>
      </div>

      {/* Render the modal when an item is clicked */}
      <ItemDetailsModal
        isOpen={isModalOpen}
        onClose={closeModal}
        item={selectedItem}
      />
    </div>
  );
}

export default TopPicks;
