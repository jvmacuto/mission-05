import React, { useState } from "react";
import "./MainContent.css";
import TrendingCategories from "./TrendingCategories";

const featuredAuctions = [
  {
    id: 1,
    title: "Vintage Car",
    image: "path_to_vintage_car_image",
    price: "$10,000",
    closingDate: "Closes: Thu, 9 Sep",
    location: "Auckland, NZ",
  },
  {
    id: 2,
    title: "Luxury Watch",
    image: "path_to_luxury_watch_image",
    price: "$5,000",
    closingDate: "Closes: Sun, 12 Sep",
    location: "Wellington, NZ",
  },
  {
    id: 3,
    title: "Antique Vase",
    image: "path_to_antique_vase_image",
    price: "$7,500",
    closingDate: "Closes: Fri, 10 Sep",
    location: "Christchurch, NZ",
  },
  {
    id: 4,
    title: "Diamond Necklace",
    image: "path_to_diamond_necklace_image",
    price: "$25,000",
    closingDate: "Closes: Sat, 11 Sep",
    location: "Hamilton, NZ",
  },
  {
    id: 5,
    title: "Rare Painting",
    image: "path_to_rare_painting_image",
    price: "$40,000",
    closingDate: "Closes: Mon, 13 Sep",
    location: "Dunedin, NZ",
  },
  {
    id: 6,
    title: "Classic Motorcycle",
    image: "path_to_classic_motorcycle_image",
    price: "$15,000",
    closingDate: "Closes: Tue, 14 Sep",
    location: "Tauranga, NZ",
  },
  {
    id: 7,
    title: "Gold Coin",
    image: "path_to_gold_coin_image",
    price: "$3,000",
    closingDate: "Closes: Wed, 15 Sep",
    location: "Napier, NZ",
  },
  {
    id: 8,
    title: "Luxury Handbag",
    image: "path_to_luxury_handbag_image",
    price: "$10,500",
    closingDate: "Closes: Thu, 16 Sep",
    location: "Palmerston North, NZ",
  },
  {
    id: 9,
    title: "Antique Clock",
    image: "path_to_antique_clock_image",
    price: "$9,500",
    closingDate: "Closes: Fri, 17 Sep",
    location: "Rotorua, NZ",
  },
  {
    id: 10,
    title: "Vintage Camera",
    image: "path_to_vintage_camera_image",
    price: "$2,500",
    closingDate: "Closes: Sat, 18 Sep",
    location: "New Plymouth, NZ",
  },
  {
    id: 11,
    title: "Classic Car Model",
    image: "path_to_classic_car_model_image",
    price: "$8,000",
    closingDate: "Closes: Sun, 19 Sep",
    location: "Nelson, NZ",
  },
  {
    id: 12,
    title: "Antique Jewelry",
    image: "path_to_antique_jewelry_image",
    price: "$35,000",
    closingDate: "Closes: Mon, 20 Sep",
    location: "Queenstown, NZ",
  },
];

function MainContent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4; // Display 4 items at a time

  const handleNext = () => {
    if (currentIndex < featuredAuctions.length - itemsPerPage) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  return (
    <main className="main-content">
      <section className="featured-auctions">
        <h2>Featured Auctions</h2>
        <div className="carousel">
          <button className="carousel-btn prev" onClick={handlePrev}>
            &#8249;
          </button>
          <div className="auction-grid">
            {featuredAuctions
              .slice(currentIndex, currentIndex + itemsPerPage)
              .map((auction) => (
                <div className="auction-item" key={auction.id}>
                  <img src={auction.image} alt={auction.title} />
                  <div className="auction-details">
                    <h3>{auction.title}</h3>
                    <p>{auction.price}</p>
                    <p>{auction.closingDate}</p>
                    <p>{auction.location}</p> {/* Added location display */}
                  </div>
                </div>
              ))}
          </div>
          <button className="carousel-btn next" onClick={handleNext}>
            &#8250;
          </button>
        </div>
      </section>
    </main>
  );
}

export default MainContent;
