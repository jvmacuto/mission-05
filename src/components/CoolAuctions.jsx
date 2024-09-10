// CoolAuctions.jsx
import React, { useState } from "react";
import "./MainContent.css"; // Reusing styles from MainContent

const coolAuctions = [
  {
    id: 1,
    title: "1961 Dodge Am-beer-lance",
    image: "path_to_image_1",
    price: "$30,000",
    closingDate: "Listed: Mon, 9 Sep",
  },
  {
    id: 2,
    title: "Life above the Hangar",
    image: "path_to_image_2",
    price: "Price by negotiation",
    closingDate: "Auction on 26 Sep, 12:00pm",
  },
  {
    id: 3,
    title: "French Chateau Fantasy",
    image: "path_to_image_3",
    price: "Auction on 26 Sep, 12:00pm",
    closingDate: "",
  },
  {
    id: 4,
    title: "1960s Ford Mustang",
    image: "path_to_image_4",
    price: "$50,000",
    closingDate: "Closes: Thu, 10 Sep",
  },
  {
    id: 5,
    title: "Vintage Truck",
    image: "path_to_image_5",
    price: "$25,000",
    closingDate: "Listed: Fri, 11 Sep",
  },
  {
    id: 6,
    title: "Classic Harley Davidson",
    image: "path_to_image_6",
    price: "$40,000",
    closingDate: "Closes: Sat, 12 Sep",
  },
  {
    id: 7,
    title: "Antique Grandfather Clock",
    image: "path_to_image_7",
    price: "$12,000",
    closingDate: "Closes: Sun, 13 Sep",
  },
  {
    id: 8,
    title: "Luxury Yacht",
    image: "path_to_image_8",
    price: "$200,000",
    closingDate: "Closes: Mon, 14 Sep",
  },
  {
    id: 9,
    title: "Antique Camera",
    image: "path_to_image_9",
    price: "$6,000",
    closingDate: "Listed: Tue, 15 Sep",
  },
  {
    id: 10,
    title: "Classic Speedboat",
    image: "path_to_image_10",
    price: "$100,000",
    closingDate: "Closes: Wed, 16 Sep",
  },
];

function CoolAuctions() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const handleNext = () => {
    if (currentIndex < coolAuctions.length - itemsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="main-content">
      <h2>Cool Auctions</h2>
      <div className="carousel">
        <button className="carousel-btn prev" onClick={handlePrev}>
          &#8249;
        </button>
        <div className="auction-grid">
          {coolAuctions
            .slice(currentIndex, currentIndex + itemsPerPage)
            .map((auction) => (
              <div className="auction-item" key={auction.id}>
                <img src={auction.image} alt={auction.title} />
                <div className="auction-details">
                  <h3>{auction.title}</h3>
                  <p>{auction.price}</p>
                  <p>{auction.closingDate}</p>
                </div>
              </div>
            ))}
        </div>
        <button className="carousel-btn next" onClick={handleNext}>
          &#8250;
        </button>
      </div>
    </section>
  );
}

export default CoolAuctions;
