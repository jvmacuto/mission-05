import React from "react";
import "./Footer.css";
import logo from "../assets/trade-me-logo.png"; // Path to your logo
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa"; // Import social media icons

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <div className="footer-column">
          <h3 className="marketplace">Marketplace</h3>
          <ul>
            <li>
              <a href="#">Latest deals</a>
            </li>
            <li>
              <a href="#">Stores</a>
            </li>
            <li>
              <a href="#">Closing soon</a>
            </li>
            <li>
              <a href="#">$1 reserve</a>
            </li>
          </ul>
          <img src={logo} alt="Trade Me Logo" className="footer-logo" />{" "}
          {/* Logo under Marketplace */}
        </div>
        <div className="footer-column">
          <h3 className="jobs">Jobs</h3>
          <ul>
            <li>
              <a href="#">Browse categories</a>
            </li>
            <li>
              <a href="#">Careers advice</a>
            </li>
            <li>
              <a href="#">JobSmart</a>
            </li>
            <li>
              <a href="#">Advertisers advice</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="motors">Motors</h3>
          <ul>
            <li>
              <a href="#">Browse all cars</a>
            </li>
            <li>
              <a href="#">Other vehicles</a>
            </li>
            <li>
              <a href="#">Buying & Selling</a>
            </li>
            <li>
              <a href="#">Dealer news & info</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="property">Property</h3>
          <ul>
            <li>
              <a href="#">International property</a>
            </li>
            <li>
              <a href="#">News & guides</a>
            </li>
            <li>
              <a href="#">Homes.co.nz</a>
            </li>
            <li>
              <a href="#">OneHub for agents</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="services">Services</h3>
          <ul>
            <li>
              <a href="#">Trades</a>
            </li>
            <li>
              <a href="#">Domestic services</a>
            </li>
            <li>
              <a href="#">Events & entertainment</a>
            </li>
            <li>
              <a href="#">Health & wellbeing</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="community">Community</h3>
          <ul>
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <a href="#">Announcements</a>
            </li>
            <li>
              <a href="#">Trust & safety</a>
            </li>
            <li>
              <a href="#">Seller information</a>
            </li>
          </ul>
          <div className="social-icons">
            <a href="https://twitter.com">
              <FaTwitter />
            </a>
            <a href="https://facebook.com">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-info">
        <p>&copy; 2024 Mission Five Option One</p>
      </div>
    </footer>
  );
}

export default Footer;
