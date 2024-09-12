import React from "react";
import "./App.css"; // Importing the main CSS for App

// Importing components
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./components/MainPage";
import CompareItems from "./components/Compare Items/CompareItems";
//import OneDollarReserve from "./components/OneDollarReserve"; // New Component
//import CoolAuctions from "./components/CoolAuctions";

//import router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
      <>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/compare" element={<CompareItems />} />
          </Routes>
          <Footer />
        </Router>
      </>
    </div>
  );
}

export default App;
