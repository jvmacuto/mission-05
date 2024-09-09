import React, { useState } from "react";
import "./ProductPage.css"; // CSS for product page styling

function ProductPage({ product = {} }) {
  const [detailsVisible, setDetailsVisible] = useState(false);
  const [sellerInfoVisible, setSellerInfoVisible] = useState(false);

  return (
    <div className="product-page">
      <h1>{product.title || "Product Title"}</h1>
      {product.imageUrl && <img src={product.imageUrl} alt={product.title} />}
      <p>{product.shortDescription || "Short description of the product."}</p>

      <div className="expandable-section">
        <h3 onClick={() => setDetailsVisible(!detailsVisible)}>
          Product Details {detailsVisible ? "-" : "+"}
        </h3>
        {detailsVisible && (
          <p>{product.fullDescription || "Full product description here."}</p>
        )}
      </div>

      <div className="expandable-section">
        <h3 onClick={() => setSellerInfoVisible(!sellerInfoVisible)}>
          Seller Information {sellerInfoVisible ? "-" : "+"}
        </h3>
        {sellerInfoVisible && (
          <p>{product.sellerInfo || "Seller information here."}</p>
        )}
      </div>

      <button
        className="place-bid-button"
        onClick={() => (window.location.href = `/bid/${product.id}`)}
      >
        Place Bid
      </button>
    </div>
  );
}

export default ProductPage;
