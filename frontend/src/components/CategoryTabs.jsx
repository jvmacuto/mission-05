import React from "react";
import "./CategoryTabs.css"; // CSS for category tabs styling

function CategoryTabs() {
  return (
    <div className="category-tabs">
      <button className="tab marketplace">Marketplace</button>
      <button className="tab jobs">Jobs</button>
      <button className="tab motors">Motors</button>
      <button className="tab property">Property</button>
      <button className="tab services">Services</button>
    </div>
  );
}

export default CategoryTabs;
