const express = require("express");
const router = express.Router();
const Item = require("../model/auction");

//get searchItems from controller
const controller = require("../controllers/controllers");

// GET /items?search=<searchTerm>
router.post("/items", controller.searchItems);

//get hello world from controller.js
router.post("/hello", controller.helloWorld);

//export router
module.exports = router;
