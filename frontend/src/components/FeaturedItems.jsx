import React from "react";
import "./FeaturedItems.css";
import propertyImage from "../assets/property.png"; // Import the property image
import paintCardImage from "../assets/paintcard.jpg"; // Import the paint card image
import makitaImage from "../assets/makita.jpg"; // Import the Makita image

function FeaturedItems() {
  return (
    <div className="featured-items">
      <div className="featured-item property-featured">
        <h3>Property</h3>
        <p>Open Endless Doors</p>
        <button>Search now</button>
      </div>
      <div className="featured-item promotion-featured">
        <h3>Promotion</h3>
        <p>WIN a $10k home glow-up!</p>
        <button>Enter now!</button>
      </div>
      <div className="featured-item trending-featured">
        <h3>Trending</h3>
        <p>Power up with new & used Makita!</p>
        <button>Shop now</button>
      </div>
    </div>
  );
}

export default FeaturedItems;
