import React, { useState } from "react";
import "./TopPicks.css"; // Separate CSS file for Top Picks

const topPicksItems = [
  {
    id: 1,
    title: "200x200x50cm Storage Shelving",
    price: "$284.91",
    closingDate: "Tue, 10 Sep",
    image: "path_to_image",
  },
  {
    id: 2,
    title: "Pallet Racking",
    price: "$595.00",
    closingDate: "Wed, 11 Sep",
    image: "path_to_image",
  },
  {
    id: 3,
    title: "Heavy-Duty Shelves",
    price: "$155.00",
    closingDate: "Sat, 7 Sep",
    image: "path_to_image",
  },
  {
    id: 4,
    title: "Custom Wooden Shelves",
    price: "$99.00",
    closingDate: "Thu, 8 Sep",
    image: "path_to_image",
  },
  {
    id: 5,
    title: "Extra Item 1",
    price: "$499.99",
    closingDate: "Thu, 15 Sep",
    image: "path_to_image",
  },
  {
    id: 6,
    title: "Extra Item 2",
    price: "$399.99",
    closingDate: "Mon, 19 Sep",
    image: "path_to_image",
  },
  {
    id: 7,
    title: "Extra Item 3",
    price: "$699.99",
    closingDate: "Fri, 20 Sep",
    image: "path_to_image",
  },
  {
    id: 8,
    title: "Extra Item 4",
    price: "$399.99",
    closingDate: "Sun, 21 Sep",
    image: "path_to_image",
  },
  {
    id: 9,
    title: "Extra Item 5",
    price: "$250.00",
    closingDate: "Mon, 22 Sep",
    image: "path_to_image",
  },
  {
    id: 10,
    title: "Extra Item 6",
    price: "$300.00",
    closingDate: "Tue, 23 Sep",
    image: "path_to_image",
  },
];

function TopPicks() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4; // Display 4 items at a time

  const handleNext = () => {
    if (currentIndex < topPicksItems.length - itemsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="top-picks-section">
      <h2>Top Picks for You</h2>
      <div className="carousel">
        <button className="carousel-btn prev" onClick={handlePrev}>
          &#8249;
        </button>
        <div className="auction-grid">
          {topPicksItems
            .slice(currentIndex, currentIndex + itemsPerPage)
            .map((item) => (
              <div className="auction-item" key={item.id}>
                <img src={item.image} alt={item.title} />
                <div className="auction-details">
                  <h3>{item.title}</h3>
                  <p>{item.price}</p>
                  <p>{item.closingDate}</p>
                </div>
              </div>
            ))}
        </div>
        <button className="carousel-btn next" onClick={handleNext}>
          &#8250;
        </button>
      </div>
    </div>
  );
}

export default TopPicks;
