import React from "react";
import "./Header.css"; // CSS for header styling
import logoImage from "../assets/trade-me-logo.png"; // Import the logo image

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <a href="/">
            <img src={logoImage} alt="Trade Me Logo" />
          </a>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <a href="/listings">Listings</a>
            </li>
            <li>
              <a href="/compare">Compare Items</a>
            </li>
            <li>
              <a href="/bids">My Bids</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
