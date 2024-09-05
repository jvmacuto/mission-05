const express = require("express");
const router = express.Router();
const Item = require("../model/auction");

//GET /items?search=<searchTerm>
router.get("/items", async (req, res) => {
  try {
    const searchTerm = req.query.search;
    const search = new RegExp(searchTerm, "i"); //make case insensitive
    const items = await Item.find({ $or: [{ title: search }] });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//export router
module.exports = router;