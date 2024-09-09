import React, { useState } from "react";
import "./TopPicks.css";

const topPicksItems = [
  {
    id: 1,
    title: "Pallet Racking / Warehouse Shelving",
    image: "path_to_image",
    price: "$349.00",
    closingDate: "Closes: Wed, 11 Sep",
    location: "Auckland",
  },
  {
    id: 2,
    title: "Shelving Units - Used",
    image: "path_to_image",
    price: "$275.00",
    closingDate: "Closes: Mon, 9 Sep",
    location: "Canterbury",
  },
  {
    id: 3,
    title: "200x200x50cm Storage Shelving",
    image: "path_to_image",
    price: "$284.91",
    closingDate: "Closes: Tue, 10 Sep",
    location: "Canterbury",
  },
  {
    id: 4,
    title: "Pallet Racking",
    image: "path_to_image",
    price: "$595.00",
    closingDate: "Closes: Wed, 11 Sep",
    location: "Auckland",
  },
  {
    id: 5,
    title: "Heavy-Duty Shelves",
    image: "path_to_image",
    price: "$155.00",
    closingDate: "Closes: Sat, 7 Sep",
    location: "Hamilton",
  },
  {
    id: 6,
    title: "Custom Wooden Shelves",
    image: "path_to_image",
    price: "$99.00",
    closingDate: "Closes: Thu, 8 Sep",
    location: "Wellington",
  },
  {
    id: 7,
    title: "Plastic Pallet Rack",
    image: "path_to_image",
    price: "$320.00",
    closingDate: "Closes: Tue, 10 Sep",
    location: "Christchurch",
  },
  {
    id: 8,
    title: "Steel Storage Shelving",
    image: "path_to_image",
    price: "$400.00",
    closingDate: "Closes: Sun, 15 Sep",
    location: "Auckland",
  },
  {
    id: 9,
    title: "DIY Shelving Kit",
    image: "path_to_image",
    price: "$120.00",
    closingDate: "Closes: Fri, 14 Sep",
    location: "Tauranga",
  },
  {
    id: 10,
    title: "Pallet Shelf Unit",
    image: "path_to_image",
    price: "$499.00",
    closingDate: "Closes: Sat, 17 Sep",
    location: "Dunedin",
  },
];

function TopPicks() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 4) % topPicksItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? topPicksItems.length - 4 : prevIndex - 4
    );
  };

  return (
    <div className="top-picks-section">
      <h2>Top Picks for You</h2>
      <div className="top-picks-carousel">
        <button className="carousel-button" onClick={prevSlide}>
          &#8249;
        </button>
        <div className="top-picks-items">
          {topPicksItems.slice(currentIndex, currentIndex + 4).map((item) => (
            <div className="top-pick-item" key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className="item-details">
                <h3>{item.title}</h3>
                <p>{item.location}</p>
                <p>{item.price}</p>
                <p>{item.closingDate}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-button" onClick={nextSlide}>
          &#8250;
        </button>
      </div>
    </div>
  );
}

export default TopPicks;
