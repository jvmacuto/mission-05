const express = require("express");
const router = express.Router();
const controller = require("../controllers/controllers");

// GET /items?search=<searchTerm>
// Search for items by title (case-insensitive)
router.get("/items", controller.searchItems);

// GET /hello
// Simple "Hello World" route to test the API
router.get("/hello", controller.helloWorld);

// POST /seed - Seed items into the database
// This route expects an array of items in the request body to insert into the database
router.post("/seed", async (req, res) => {
  console.log("Received POST request at /seed"); // Debugging log
  const items = req.body;
  try {
    await controller.seedItems(items);
    res.status(200).json({ message: "Items have been seeded." });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error seeding items", error: error.message });
  }
});

// POST /clear - Clear all items from the database
// This route clears the `items` collection by deleting all items
router.post("/clear", async (req, res) => {
  try {
    await controller.clearItems();
    res.status(200).json({ message: "All items have been cleared." });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error clearing items", error: error.message });
  }
});

// Export the router to be used in the main application
module.exports = router;
