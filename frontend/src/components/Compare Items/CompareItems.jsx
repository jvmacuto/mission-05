import React, { useEffect, useState } from "react";
import CompareItemsModal from "./CompareItemsModal";
import "./CompareItems.css";

const CompareItems = () => {
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [comparedItems, setComparedItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(null);

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

  const handleSelectItem = (item) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(item)) {
        return prevSelectedItems.filter((i) => i !== item);
      } else if (prevSelectedItems.length < 2) {
        return [...prevSelectedItems, item];
      } else {
        alert("You can only select up to two items for comparison.");
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
              <button onClick={() => handleSelectItem(item)}>
                {selectedItems.includes(item) ? "Deselect" : "Select"}
              </button>
            </div>
          ))}
        </div>
        <button onClick={handleCompare}>Compare Selected Items</button>
      </div>
      <CompareItemsModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        comparedItems={comparedItems}
      />
    </>
  );
};

export default CompareItems;
