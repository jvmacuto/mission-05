import React from "react";
import "./ProductListing.css"; // CSS for product listing styling

function ProductListing({ products = [] }) {
  // Ensure 'products' has a default value of an empty array
  return (
    <div className="product-listing">
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <div className="product-actions">
              <button onClick={() => handleSelect(product)}>Compare</button>
              <button onClick={() => handleBid(product)}>Place Bid</button>
            </div>
          </div>
        ))
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
}

export default ProductListing;
