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
    description: "Restored 1960s vintage car, excellent condition.",
    seller: {
      name: "vintagewheels",
      feedback: "100% positive feedback (50 stars)",
      location: "Auckland",
      memberSince: "January 2010",
    },
  },
  {
    id: 2,
    title: "Luxury Watch",
    image: "path_to_luxury_watch_image",
    price: "$5,000",
    closingDate: "Closes: Sun, 12 Sep",
    location: "Wellington, NZ",
    description:
      "Swiss-made luxury watch with gold detailing and leather strap.",
    seller: {
      name: "timemaster",
      feedback: "98% positive feedback (120 stars)",
      location: "Wellington",
      memberSince: "March 2012",
    },
  },
  {
    id: 3,
    title: "Antique Vase",
    image: "path_to_antique_vase_image",
    price: "$7,500",
    closingDate: "Closes: Fri, 10 Sep",
    location: "Christchurch, NZ",
    description: "Rare Ming Dynasty vase in excellent condition.",
    seller: {
      name: "antiqueseller",
      feedback: "95% positive feedback (70 stars)",
      location: "Christchurch",
      memberSince: "November 2008",
    },
  },
  {
    id: 4,
    title: "Diamond Necklace",
    image: "path_to_diamond_necklace_image",
    price: "$25,000",
    closingDate: "Closes: Sat, 11 Sep",
    location: "Hamilton, NZ",
    description: "18k white gold necklace with 5-carat diamonds.",
    seller: {
      name: "jewelryqueen",
      feedback: "99% positive feedback (200 stars)",
      location: "Hamilton",
      memberSince: "August 2011",
    },
  },
  {
    id: 5,
    title: "Rare Painting",
    image: "path_to_rare_painting_image",
    price: "$40,000",
    closingDate: "Closes: Mon, 13 Sep",
    location: "Dunedin, NZ",
    description: "Original 19th-century painting by renowned artist.",
    seller: {
      name: "artcollector",
      feedback: "100% positive feedback (85 stars)",
      location: "Dunedin",
      memberSince: "May 2015",
    },
  },
  {
    id: 6,
    title: "Classic Motorcycle",
    image: "path_to_classic_motorcycle_image",
    price: "$15,000",
    closingDate: "Closes: Tue, 14 Sep",
    location: "Tauranga, NZ",
    description: "Fully restored 1970s motorcycle, runs perfectly.",
    seller: {
      name: "bikemaster",
      feedback: "97% positive feedback (110 stars)",
      location: "Tauranga",
      memberSince: "July 2009",
    },
  },
  {
    id: 7,
    title: "Gold Coin",
    image: "path_to_gold_coin_image",
    price: "$3,000",
    closingDate: "Closes: Wed, 15 Sep",
    location: "Napier, NZ",
    description: "Rare 19th-century gold coin in mint condition.",
    seller: {
      name: "coinguru",
      feedback: "92% positive feedback (65 stars)",
      location: "Napier",
      memberSince: "April 2010",
    },
  },
  {
    id: 8,
    title: "Luxury Handbag",
    image: "path_to_luxury_handbag_image",
    price: "$10,500",
    closingDate: "Closes: Thu, 16 Sep",
    location: "Palmerston North, NZ",
    description: "Designer luxury handbag, made of premium leather.",
    seller: {
      name: "fashionista",
      feedback: "99% positive feedback (150 stars)",
      location: "Palmerston North",
      memberSince: "June 2016",
    },
  },
  {
    id: 9,
    title: "Antique Clock",
    image: "path_to_antique_clock_image",
    price: "$9,500",
    closingDate: "Closes: Fri, 17 Sep",
    location: "Rotorua, NZ",
    description: "19th-century handcrafted wooden clock in working condition.",
    seller: {
      name: "antiqueclockman",
      feedback: "90% positive feedback (40 stars)",
      location: "Rotorua",
      memberSince: "February 2013",
    },
  },
  {
    id: 10,
    title: "Vintage Camera",
    image: "path_to_vintage_camera_image",
    price: "$2,500",
    closingDate: "Closes: Sat, 18 Sep",
    location: "New Plymouth, NZ",
    description: "Classic film camera from the 1960s in great condition.",
    seller: {
      name: "cameracollector",
      feedback: "93% positive feedback (55 stars)",
      location: "New Plymouth",
      memberSince: "September 2017",
    },
  },
  {
    id: 11,
    title: "Classic Car Model",
    image: "path_to_classic_car_model_image",
    price: "$8,000",
    closingDate: "Closes: Sun, 19 Sep",
    location: "Nelson, NZ",
    description: "Highly detailed model of a 1950s classic car.",
    seller: {
      name: "modelcollector",
      feedback: "95% positive feedback (30 stars)",
      location: "Nelson",
      memberSince: "December 2018",
    },
  },
  {
    id: 12,
    title: "Antique Jewelry",
    image: "path_to_antique_jewelry_image",
    price: "$35,000",
    closingDate: "Closes: Mon, 20 Sep",
    location: "Queenstown, NZ",
    description: "Antique 18k gold jewelry set with precious stones.",
    seller: {
      name: "antiquejewel",
      feedback: "97% positive feedback (95 stars)",
      location: "Queenstown",
      memberSince: "October 2015",
    },
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
