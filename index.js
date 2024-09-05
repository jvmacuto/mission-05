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

// Add item
const addItem = (item) => {
  Item.create(item)
    .then((item) => {
      console.info("Item has been added", item);
      mongoose.connection.close();
    })
    .catch((err) => console.log(err));
};

//find item
const findItem = (title) => {
  //make case insensitive
  const search = new RegExp(title, "i");
  Item.find({ $or: [{ title: search }] }).then((item) => {
    console.info(item);
    console.info(`${item.length} matches`);
    mongoose.connection.close();
  });
};

//update item
const updateItem = (_id, item) => {
  Item.findByIdAndUpdate({ _id }, item).then((item) => {
    console.info("Item has been updated");
    mongoose.connection.close();
  });
};

//remove item
const removeItem = (_id) => {
  Item.deleteOne({ _id }).then((item) => {
    console.info("Item has been removed");
    mongoose.connection.close();
  });
};

//list all items
const listItems = () => {
  Item.find().then((items) => {
    console.info(items);
    console.info(`${items.length} items`);
    mongoose.connection.close();
  });
};

//start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Export functions
module.exports = {
  addItem,
  findItem,
  updateItem,
  removeItem,
  listItems,
};
