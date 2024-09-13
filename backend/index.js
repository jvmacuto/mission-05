//import necessary modules
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const itemsRouter = require("./routes/routes");
const path = require("path");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

//middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

//use routes
app.use("/api", itemsRouter);

//map global promise - get rid of warning
mongoose.Promise = global.Promise;

//connect to database
mongoose
  .connect("mongodb://localhost:27017/auctiondatabase")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

//import model
const Item = require("./model/auction");

//start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
