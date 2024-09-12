//import necessary modules
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const itemsRouter = require("./routes/routes");

const app = express();
const port = process.env.PORT || 3000;

//middleware
app.use(bodyParser.json());

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

//Tajul's code
// connect to watchlist database
mongoose
  .connect("mongodb://localhost:27017/watchlistdatabase")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));
//Tajul's code ends here

//start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
