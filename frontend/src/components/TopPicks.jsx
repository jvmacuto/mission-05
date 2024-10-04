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
    description: [
      "Steel shelf, 735mm x 900mm",
      "Powder-coated Grey",
      "1.5mm thick",
      "3 shelves on each level",
    ],
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
    description: [
      "Durable steel racking system",
      "Adjustable beams",
      "Maximum load: 2000kg per level",
      "Suitable for warehouses and industrial use",
    ],
    shippingOptions: {
      destination: "To be arranged",
      pickup: "Pick-up available from Wellington, NZ",
      shippingFee: "Varies by location",
    },
    paymentOptions: ["Ping", "Credit Card", "NZ Bank Deposit"],
    seller: {
      name: "rackmaster",
      feedback: "97% positive feedback (120 stars)",
      location: "Wellington",
      memberSince: "Monday, 1 April 2010",
    },
  },
  {
    id: 3,
    title: "Heavy-Duty Shelves",
    price: "$155.00",
    closingDate: "Sat, 7 Sep",
    location: "Christchurch, NZ",
    image: heavyduty,
    description: [
      "Heavy-duty steel construction",
      "600mm deep x 1800mm high",
      "5 adjustable shelves",
      "Weight capacity: 500kg per shelf",
    ],
    shippingOptions: {
      destination: "To be arranged",
      pickup: "Pick-up available from Christchurch, NZ",
      shippingFee: "Varies by location",
    },
    paymentOptions: ["Cash", "NZ Bank Deposit"],
    seller: {
      name: "shelvemaster",
      feedback: "94% positive feedback (75 stars)",
      location: "Christchurch",
      memberSince: "Wednesday, 15 May 2013",
    },
  },
  {
    id: 4,
    title: "Custom Wooden Shelves",
    price: "$99.00",
    closingDate: "Thu, 8 Sep",
    location: "Hamilton, NZ",
    image: customwood,
    description: [
      "Handcrafted wooden shelves",
      "Made from sustainable pine wood",
      "3-tier design with smooth finish",
      "Dimensions: 900mm wide x 1500mm high",
    ],
    shippingOptions: {
      destination: "To be arranged",
      pickup: "Pick-up available from Hamilton, NZ",
      shippingFee: "Varies by location",
    },
    paymentOptions: ["Cash", "NZ Bank Deposit", "PayPal"],
    seller: {
      name: "woodworks",
      feedback: "98% positive feedback (45 stars)",
      location: "Hamilton",
      memberSince: "Saturday, 19 February 2011",
    },
  },
  {
    id: 5,
    title: "Industrial Workbench",
    price: "$499.99",
    closingDate: "Thu, 15 Sep",
    location: "Dunedin, NZ",
    image: "path_to_image",
    description: [
      "Heavy-duty steel frame",
      "Durable wooden work surface",
      "Dimensions: 1200mm x 800mm",
      "Max load capacity: 500kg",
    ],
    shippingOptions: {
      destination: "To be arranged",
      pickup: "Pick-up available from Dunedin, NZ",
      shippingFee: "Varies by location",
    },
    paymentOptions: ["Ping", "NZ Bank Deposit", "Credit Card"],
    seller: {
      name: "benchboss",
      feedback: "99% positive feedback (65 stars)",
      location: "Dunedin",
      memberSince: "Thursday, 20 September 2012",
    },
  },
  {
    id: 6,
    title: "Heavy-Duty Tool Cabinet",
    price: "$399.99",
    closingDate: "Mon, 19 Sep",
    location: "Tauranga, NZ",
    image: "path_to_image",
    description: [
      "Steel construction",
      "Lockable drawers",
      "4 casters for mobility",
      "Dimensions: 900mm x 600mm",
    ],
    shippingOptions: {
      destination: "To be arranged",
      pickup: "Pick-up available from Tauranga, NZ",
      shippingFee: "Varies by location",
    },
    paymentOptions: ["Ping", "Cash", "NZ Bank Deposit"],
    seller: {
      name: "toolking",
      feedback: "95% positive feedback (50 stars)",
      location: "Tauranga",
      memberSince: "Monday, 3 June 2013",
    },
  },
  {
    id: 7,
    title: "Mobile Tool Cart",
    price: "$699.99",
    closingDate: "Fri, 20 Sep",
    location: "Napier, NZ",
    image: "path_to_image",
    description: [
      "Mobile tool cart with lockable compartments",
      "Heavy-duty steel frame",
      "Dimensions: 1200mm x 700mm",
      "Weight capacity: 200kg",
    ],
    shippingOptions: {
      destination: "To be arranged",
      pickup: "Pick-up available from Napier, NZ",
      shippingFee: "Varies by location",
    },
    paymentOptions: ["Ping", "Cash", "NZ Bank Deposit"],
    seller: {
      name: "cartmaster",
      feedback: "96% positive feedback (85 stars)",
      location: "Napier",
      memberSince: "Wednesday, 7 July 2014",
    },
  },
  {
    id: 8,
    title: "Portable Storage Unit",
    price: "$399.99",
    closingDate: "Sun, 21 Sep",
    location: "Palmerston North, NZ",
    image: "path_to_image",
    description: [
      "Weather-resistant portable storage",
      "Easy to assemble",
      "Dimensions: 1500mm x 1000mm",
      "Suitable for outdoor use",
    ],
    shippingOptions: {
      destination: "To be arranged",
      pickup: "Pick-up available from Palmerston North, NZ",
      shippingFee: "Varies by location",
    },
    paymentOptions: ["Cash", "NZ Bank Deposit", "Credit Card"],
    seller: {
      name: "storagesolutions",
      feedback: "93% positive feedback (60 stars)",
      location: "Palmerston North",
      memberSince: "Friday, 28 October 2015",
    },
  },
  {
    id: 9,
    title: "Warehouse Ladder",
    price: "$250.00",
    closingDate: "Mon, 22 Sep",
    location: "Rotorua, NZ",
    image: "path_to_image",
    description: [
      "Heavy-duty warehouse ladder",
      "Anti-slip steps",
      "Height: 3 meters",
      "Foldable design for easy storage",
    ],
    shippingOptions: {
      destination: "To be arranged",
      pickup: "Pick-up available from Rotorua, NZ",
      shippingFee: "Varies by location",
    },
    paymentOptions: ["Ping", "Cash", "NZ Bank Deposit"],
    seller: {
      name: "ladderpro",
      feedback: "92% positive feedback (40 stars)",
      location: "Rotorua",
      memberSince: "Tuesday, 17 March 2016",
    },
  },
  {
    id: 10,
    title: "Shelving Rack System",
    price: "$300.00",
    closingDate: "Tue, 23 Sep",
    location: "New Plymouth, NZ",
    image: "path_to_image",
    description: [
      "Modular shelving rack system",
      "Adjustable shelves",
      "Weight capacity: 150kg per shelf",
      "Dimensions: 1000mm x 2000mm",
    ],
    shippingOptions: {
      destination: "To be arranged",
      pickup: "Pick-up available from New Plymouth, NZ",
      shippingFee: "Varies by location",
    },
    paymentOptions: ["Ping", "Credit Card", "NZ Bank Deposit"],
    seller: {
      name: "rackgenius",
      feedback: "90% positive feedback (55 stars)",
      location: "New Plymouth",
      memberSince: "Monday, 10 May 2018",
    },
  },
];


function ItemDetailsModal({ isOpen, onClose, item }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <div className="modal-main">
          <div className="modal-left">
            <img src={item.image} alt={item.title} className="modal-image" />
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
          <div className="modal-right">
            <h2>{item.title}</h2>
            <h3>Description</h3>
            <ul className="description-list">
              {item.description.map((descItem, index) => (
                <li key={index}>{descItem}</li>
              ))}
            </ul>
            <h3>Details</h3>
            <ul>
              <li>Closing Date: {item.closingDate}</li>
              <li>Location: {item.location}</li>
            </ul>
            <h3>Shipping & Pickup Options</h3>
            <table className="shipping-table">
              <tbody>
                <tr>
                  <th>Destination & Description</th>
                  <td>{item.shippingOptions.destination}</td>
                </tr>
                <tr>
                  <th>Pick-up</th>
                  <td>{item.shippingOptions.pickup}</td>
                </tr>
                <tr>
                  <th>Shipping Fee</th>
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
        </div>
      </div>
    </div>
  );
}

function TopPicks() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

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

      <ItemDetailsModal
        isOpen={isModalOpen}
        onClose={closeModal}
        item={selectedItem}
      />
    </div>
  );
}

export default TopPicks;
