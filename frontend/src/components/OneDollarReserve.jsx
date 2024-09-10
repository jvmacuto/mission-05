// OneDollarReserve.jsx
import React, { useState } from "react";
import "./MainContent.css"; // Reusing styles from MainContent

const oneDollarAuctions = [
  {
    id: 1,
    title: "Site office / sleepout * Damaged *",
    image: "path_to_image_1",
    price: "$1.00",
    closingDate: "Closes: Tue, 17 Sep",
  },
  {
    id: 2,
    title: "$1 Reserve - Cadillac Sedan De Ville 1982",
    image: "path_to_image_2",
    price: "$205.00",
    closingDate: "Closes: Tue, 17 Sep",
  },
  {
    id: 3,
    title: "Giant XTC Advanced Hardtail Mountain Bike",
    image: "path_to_image_3",
    price: "$95.00",
    closingDate: "Closes: Mon, 16 Sep",
  },
  {
    id: 4,
    title: "Vintage Bicycle",
    image: "path_to_image_4",
    price: "$150.00",
    closingDate: "Closes: Wed, 18 Sep",
  },
  {
    id: 5,
    title: "Classic Wooden Chair",
    image: "path_to_image_5",
    price: "$50.00",
    closingDate: "Closes: Thu, 19 Sep",
  },
  {
    id: 6,
    title: "Vintage Sewing Machine",
    image: "path_to_image_6",
    price: "$70.00",
    closingDate: "Closes: Fri, 20 Sep",
  },
  {
    id: 7,
    title: "Rare Book Collection",
    image: "path_to_image_7",
    price: "$30.00",
    closingDate: "Closes: Sat, 21 Sep",
  },
  {
    id: 8,
    title: "Antique Table Lamp",
    image: "path_to_image_8",
    price: "$90.00",
    closingDate: "Closes: Sun, 22 Sep",
  },
  {
    id: 9,
    title: "Painting Set",
    image: "path_to_image_9",
    price: "$120.00",
    closingDate: "Closes: Mon, 23 Sep",
  },
  {
    id: 10,
    title: "Vintage Typewriter",
    image: "path_to_image_10",
    price: "$65.00",
    closingDate: "Closes: Tue, 24 Sep",
  },
];

function OneDollarReserve() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const handleNext = () => {
    if (currentIndex < oneDollarAuctions.length - itemsPerPage) {
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
      <h2>$1 Reserve</h2>
      <div className="carousel">
        <button className="carousel-btn prev" onClick={handlePrev}>
          &#8249;
        </button>
        <div className="auction-grid">
          {oneDollarAuctions.slice(currentIndex, currentIndex + itemsPerPage).map((auction) => (
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

export default OneDollarReserve;
