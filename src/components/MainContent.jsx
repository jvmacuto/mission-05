import React from "react";
import "./MainContent.css";
import TrendingCategories from "./TrendingCategories";

const featuredAuctions = [
  {
    id: 1,
    title: "Vintage Car",
    image: "path_to_image",
    price: "$10,000",
    closingDate: "Closes: Thu, 9 Sep",
  },
  {
    id: 2,
    title: "Luxury Watch",
    image: "path_to_image",
    price: "$5,000",
    closingDate: "Closes: Sun, 12 Sep",
  },
  // Add more auctions as needed
];

function MainContent() {
  return (
    <main className="main-content">
      <section className="featured-auctions">
        <h2>Featured Auctions</h2>
        <div className="auction-grid">
          {featuredAuctions.map((auction) => (
            <div className="auction-item" key={auction.id}>
              <img src={auction.image} alt={auction.title} />
              <h3>{auction.title}</h3>
              <p>{auction.price}</p>
              <p>{auction.closingDate}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default MainContent;
