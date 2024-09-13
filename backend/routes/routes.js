const express = require("express");
const router = express.Router();
const Item = require("../model/auction");

//get searchItems from controller
const controller = require("../controllers/controllers");

// GET /items?search=<searchTerm>
router.get("/items", controller.searchItems);

//get all data from dataSeed.json
router.get("/data", controller.getDataFromSeed);

//John Vincent's routes
router.post("/bid/:id", controller.placeBid);

//get hello world from controller.js
router.get("/hello", controller.helloWorld);

//export router
module.exports = router;
