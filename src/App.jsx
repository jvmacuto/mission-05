import React from "react";
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
import ProductListing from "./components/ProductListing";
import ProductPage from "./components/ProductPage";
import BidConfirmation from "./components/BidConfirmation";
import Compare from "./components/Compare";

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

  return (
    <div className="App">
      <Header /> {/* Header with navigation */}
      <SearchBar />{" "}
      {/* Main Search bar with "KIA ORA! READY TO FIND YOUR NEW?" */}
      <CategoryTabs />{" "}
      {/* Tabs for different categories like Marketplace, Jobs, etc. */}
      <Advertisement /> {/* Advertisement section */}
      <TopPicks />
      <FeaturedItems /> {/* Featured items section */}
      <MainContent /> {/* Main content with featured auctions */}
      <TrendingCategories categories={trendingCategories} />{" "}
      {/* Trending Categories section */}
      <ProductListing /> {/* Example Product Listing Page */}
      <ProductPage /> {/* Example Product Page */}
      <BidConfirmation
        product={{
          title: "Sample Product",
          imageUrl: "/path/to/image",
          currentBid: 100,
        }}
      />{" "}
      {/* Example Bid Confirmation */}
      <Compare
        selectedItems={[
          {
            id: 1,
            title: "Product 1",
            imageUrl: "/path/to/image",
            price: "$100",
            condition: "New",
            sellerRating: "4.5 stars",
          },
        ]}
      />{" "}
      {/* Example Compare Page */}
      <Footer /> {/* Footer with site links and information */}
    </div>
  );
}

export default App;
