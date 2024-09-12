import React, { useEffect, useState } from "react";
import CompareItemsModal from "./CompareItemsModal";
import BidAmountModal from "./BidAmountModal";
import "./CompareItems.css";

const CompareItems = ({ bidDetails, setBidDetails }) => {
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [comparedItems, setComparedItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBidModalOpen, setIsBidModalOpen] = useState(false);
  const [currentBidItem, setCurrentBidItem] = useState(null);
  const [error, setError] = useState(null);
  const [bids, setBids] = useState({}); // State to track placed bids
  const [alertShown, setAlertShown] = useState(false); // State to track alert status
  const [isButtonDisabled, setIsButtonDisabled] = useState(false); // State to disable button

  useEffect(() => {
    fetch("http://localhost:3000/api/data")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => setItems(data))
      .catch((err) => setError(err.message));
  }, []);

  useEffect(() => {
    // Load bid details from local storage
    const savedBidDetails =
      JSON.parse(localStorage.getItem("bidDetails")) || [];
    setBidDetails(savedBidDetails);

    // Load bids state from local storage
    const savedBids = JSON.parse(localStorage.getItem("bids")) || {};
    setBids(savedBids);
  }, [setBidDetails]);

  const handleSelectItem = (item) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(item)) {
        return prevSelectedItems.filter((i) => i !== item);
      } else if (prevSelectedItems.length < 2) {
        setAlertShown(false); // Reset alert status when a valid selection is made
        return [...prevSelectedItems, item];
      } else {
        if (!alertShown) {
          alert("You can only select up to two items for comparison.");
          setAlertShown(true); // Set alert status to true after showing the alert
        }
        return prevSelectedItems;
      }
    });
  };

  const handleCompare = () => {
    if (selectedItems.length !== 2) {
      alert("Please select exactly two items to compare.");
      return;
    }
    setComparedItems(selectedItems);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openBidModal = (item) => {
    setCurrentBidItem(item);
    setIsBidModalOpen(true);
  };

  const closeBidModal = () => {
    setIsBidModalOpen(false);
    setCurrentBidItem(null);
  };

  const handlePlaceBid = (item, bidAmount) => {
    if (!bidAmount || bidAmount < item.reserve_price) {
      alert(`Bid amount must be at least ${item.reserve_price}`);
      return;
    }

    setIsButtonDisabled(true); // Disable button
    setBids((prevBids) => {
      const newBids = { ...prevBids };
      if (newBids[item.title]) {
        delete newBids[item.title]; // Cancel bid
        setBidDetails((prevDetails) => {
          const updatedDetails = prevDetails.filter(
            (i) => i.title !== item.title
          );
          localStorage.setItem("bidDetails", JSON.stringify(updatedDetails)); // Save to local storage
          return updatedDetails;
        });
        alert(`Bid canceled on ${item.title}`);
      } else {
        newBids[item.title] = bidAmount; // Place bid with amount
        setBidDetails((prevDetails) => {
          const updatedDetails = [...prevDetails, { ...item, bidAmount }];
          localStorage.setItem("bidDetails", JSON.stringify(updatedDetails)); // Save to local storage
          return updatedDetails;
        });
        alert(`Bid placed on ${item.title} with amount ${bidAmount}`);
      }
      localStorage.setItem("bids", JSON.stringify(newBids)); // Save to local storage
      setIsButtonDisabled(false); // Re-enable button after operation
      return newBids;
    });
    closeBidModal();
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (items.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="compare-container">
        <h1>Compare Items</h1>
        <div className="compare-items">
          {items.map((item, index) => (
            <div key={index} className="item">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <p>Starting Price: ${item.starting_price}</p>
              <p>Reserve Price: ${item.reserve_price}</p>
              <button
                className="select-button"
                onClick={() => handleSelectItem(item)}
              >
                {selectedItems.includes(item) ? "Deselect" : "Select"}
              </button>
              <button
                onClick={() => openBidModal(item)}
                disabled={isButtonDisabled}
              >
                {bids[item.title] ? "Cancel Bid" : "Place Bid"}
              </button>
            </div>
          ))}
        </div>
        <button onClick={handleCompare}>Compare Selected Items</button>
      </div>
      <CompareItemsModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        comparedItems={comparedItems || []} // Ensure comparedItems is an array
        bids={bids} // Pass the bids state to the modal
        bidDetails={bidDetails || []} // Ensure bidDetails is an array
        handlePlaceBid={handlePlaceBid} // Pass the handlePlaceBid function to the modal
      />
      {currentBidItem && (
        <BidAmountModal
          isOpen={isBidModalOpen}
          onRequestClose={closeBidModal}
          item={currentBidItem}
          handlePlaceBid={handlePlaceBid}
        />
      )}
    </>
  );
};

export default CompareItems;
