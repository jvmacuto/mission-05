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

function TopPicks() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

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
              <div className="auction-item" key={item.id}>
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
    </div>
  );
}

export default TopPicks;
