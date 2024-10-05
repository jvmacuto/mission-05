// Import mongoose
const mongoose = require("mongoose");

// Map global promise - get rid of warning
mongoose.Promise = global.Promise;

// Connect to the database
mongoose
  .connect("mongodb://localhost:27017/auctiondatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Import the Item model from auction
const Item = require("../model/auction");

// CRUD operations on the database

// Add item
const addItem = (item) => {
  Item.create(item)
    .then((item) => {
      console.info("Item has been added", item);
      mongoose.connection.close(); // Close the connection after operation
    })
    .catch((err) => console.log(err));
};

// Find item by title (case-insensitive)
const findItem = (title) => {
  const search = new RegExp(title, "i"); // Create case-insensitive regex
  Item.find({ $or: [{ title: search }] }).then((item) => {
    console.info(item);
    console.info(`${item.length} matches`);
    mongoose.connection.close(); // Close the connection after operation
  });
};

// Update item by _id
const updateItem = (_id, item) => {
  Item.findByIdAndUpdate({ _id }, item).then((item) => {
    console.info("Item has been updated", item);
    mongoose.connection.close(); // Close the connection after operation
  });
};

// Remove item by _id
const removeItem = (_id) => {
  Item.deleteOne({ _id }).then((item) => {
    console.info("Item has been removed", item);
    mongoose.connection.close(); // Close the connection after operation
  });
};

// List all items in the database
const listItems = () => {
  Item.find().then((items) => {
    console.info(items);
    console.info(`${items.length} items`);
    mongoose.connection.close(); // Close the connection after operation
  });
};

// Search items using a query parameter (case-insensitive)
const searchItems = async (req, res) => {
  try {
    const searchTerm = req.query.search;
    const searchRegex = new RegExp(searchTerm, "i"); // Case-insensitive search
    const items = await Item.find({ title: searchRegex });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Simple "Hello World" response for the API
const helloWorld = (req, res) => {
  res.send("Hello World!");
};

// ===================== CLI COMMAND TOOL ===========================//

// Function to seed multiple items into MongoDB
const seedItems = async (items) => {
  try {
    await Item.insertMany(items); // Insert many items at once
    console.info("Items have been seeded successfully.");
  } catch (err) {
    console.error("Error seeding data:", err);
  } finally {
    mongoose.connection.close(); // Close the connection after operation
  }
};

// Function to clear all items from MongoDB
const clearItems = async () => {
  try {
    await Item.deleteMany({}); // Delete all documents in the collection
    console.info("All items have been cleared from the database.");
  } catch (err) {
    console.error("Error clearing items:", err);
  } finally {
    mongoose.connection.close(); // Close the connection after operation
  }
};

// ======================= END CLI ADDITIONS ===========================//

// Export all module functions
module.exports = {
  addItem,
  findItem,
  updateItem,
  removeItem,
  listItems,
  searchItems,
  helloWorld,
  seedItems, // Function for seeding items
  clearItems, // Function for clearing all items
};
