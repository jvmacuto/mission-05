import React, { useState } from "react";
import "./App.css"; // Importing the main CSS for App

// Importing components
import Header from "./components/Header";
import SearchBar from "./components/SearchBar"; // Import the SearchBar component
import CategoryTabs from "./components/CategoryTabs";
import Advertisement from "./components/Advertisement"; // Import the Advertisement component
import TopPicks from "./components/TopPicks";
import FeaturedItems from "./components/FeaturedItems"; // Import the FeaturedItems component
import MainContent from "./components/MainContent";
import TrendingCategories from "./components/TrendingCategories"; // Import the TrendingCategories component
import Footer from "./components/Footer";
import OneDollarReserve from "./components/OneDollarReserve"; // New Component
import CoolAuctions from "./components/CoolAuctions";

function App() {
  const trendingCategories = [
    {
      name: "609+ Ride on",
      description:
        "Marketplace / Home & living / Outdoor, garden & conservatory / Lawnmowers / Ride on",
      link: "/category-1",
    },
    {
      name: "3,220+ Table & chair sets",
      description:
        "Marketplace / Home & living / Outdoor, garden & conservatory / Outdoor furniture / Table & chair sets",
      link: "/category-2",
    },
    {
      name: "1,177+ Tropicals",
      description:
        "Marketplace / Home & living / Outdoor, garden & conservatory / Plants & trees / Tropicals",
      link: "/category-3",
    },
    // Add more categories as needed
  ];

  // State to manage the selected item and modal display
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <Header /> {/* Header with navigation */}
      <SearchBar />{" "}
      {/* Main Search bar with "KIA ORA! READY TO FIND YOUR NEW?" */}
      <CategoryTabs />{" "}
      {/* Tabs for different categories like Marketplace, Jobs, etc. */}
      <Advertisement /> {/* Advertisement section */}
      <TopPicks openModal={openModal} /> {/* Passing the modal open function */}
      <FeaturedItems /> {/* Featured items section */}
      <MainContent /> {/* Main content with featured auctions */}
      <TrendingCategories categories={trendingCategories} />{" "}
      {/* Trending Categories section */}
      <OneDollarReserve /> {/* $1 Reserve section */}
      <CoolAuctions /> {/* Cool Auctions section */}
      <Footer /> {/* Footer with site links and information */}
      {/* Conditionally render the modal when an item is selected */}
      {isModalOpen && selectedItem && (
        <ItemDetailsModal
          isOpen={isModalOpen}
          onClose={closeModal}
          item={selectedItem}
        />
      )}
    </div>
  );
}

export default App;
