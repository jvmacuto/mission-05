import React from "react";
import "./TrendingCategories.css";

function TrendingCategories({ categories }) {
  return (
    <div className="trending-categories">
      <h2>Trending Categories</h2>
      <div className="categories-grid">
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            <h3>{category.name}</h3>
            <p>{category.description}</p>
            <a href={category.link}>Explore</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendingCategories;
