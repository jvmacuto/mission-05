import Header from "./Header";
import SearchBar from "./SearchBar"; // Import the SearchBar component
import CategoryTabs from "./CategoryTabs";
import Advertisement from "./Advertisement"; // Import the Advertisement component
import TopPicks from "./TopPicks";
import FeaturedItems from "./FeaturedItems"; // Import the FeaturedItems component
import MainContent from "./MainContent";
import TrendingCategories from "./TrendingCategories"; // Import the TrendingCategories component
import OneDollarReserve from "./OneDollarReserve"; // New Component
import CoolAuctions from "./CoolAuctions";
import Footer from "./Footer";

const MainPage = () => {
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
    <>
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
      <OneDollarReserve /> {/* $1 Reserve section */}
      <CoolAuctions /> {/* Cool Auctions section */}
    </>
  );
};

export default MainPage;
