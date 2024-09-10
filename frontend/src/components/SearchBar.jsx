import React from "react";
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa"; // Import the search icon

function SearchBar() {
  return (
    <div className="search-bar-container">
      <h1 className="main-heading">KIA ORA! READY TO FIND YOUR NEW?</h1>
      <div className="search-bar">
        <FaSearch className="search-icon" /> {/* Icon inside the input */}
        <input
          type="text"
          placeholder="Search all of Trade Me"
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
