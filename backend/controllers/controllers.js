//import necessary modules
const fs = require("fs");
const mongoose = require("mongoose");
const path = require("path");

//map global promise - get rid of warning
mongoose.Promise = global.Promise;

//connect to database
mongoose
  .connect("mongodb://localhost:27017/auctiondatabase")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

//import model
const Item = require("../model/auction");

//the following commands are used to add, find, update, remove, and list items from the database
//it's important to note that the database must be running in order to use these commands
//to run the commands, use the following syntax:
// Add item
const addItem = (item) => {
  Item.create(item)
    .then((item) => {
      console.info("Item has been added", item);

      //Read existing data from the json file
      let data = [];
      const filePath = "./seed_data/dataSeed.json";
      if (fs.existsSync(filePath)) {
        const fileData = fs.readFileSync(filePath);
        data = JSON.parse(fileData);
      }

      //append the new item to the data array
      data.push(item);

      //write the updated data to the json file
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
      console.info(`Data has been written to ${filePath}`);
      mongoose.connection.close();
    })
    .catch((err) => console.log(err));
};

//find item
/*const findItem = (title) => {
  //make case insensitive
  const search = new RegExp(title, "i");
  Item.find({ $or: [{ title: search }] }).then((item) => {
    console.info(item);
    console.info(`${item.length} matches`);
    mongoose.connection.close();
  });
};*/

const findItem = (title) => {
  //link to file path
  const filePath = "./seed_data/dataSeed.json";
  if (fs.existsSync(filePath)) {
    try {
      const fileData = fs.readFileSync(filePath, "utf8");
      const data = JSON.parse(fileData);
      //make case insensitive
      const search = new RegExp(title, "i");
      const result = data.filter((item) => search.test(item.title));
      console.info(result);
      console.info(`${result.length} matches`);
    } catch (err) {
      console.log(err);
    }
  } else {
    console.log("File does not exist");
  }
};

// Update item in database and JSON file
const updateItem = (_id, updatedItem) => {
  Item.findByIdAndUpdate(_id, updatedItem, { new: true })
    .then((item) => {
      console.info("Item has been updated in the database", item);

      // Read existing data from the JSON file
      const filePath = "./seed_data/dataSeed.json";
      if (fs.existsSync(filePath)) {
        try {
          const fileData = fs.readFileSync(filePath, "utf8");
          let data = JSON.parse(fileData);

          // Find the index of the item to update
          const index = data.findIndex((item) => item._id === _id);
          if (index !== -1) {
            // Update the item in the data array
            data[index] = { ...data[index], ...updatedItem };

            // Write the updated data back to the JSON file
            fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
            console.info(`Item has been updated in ${filePath}`);
          } else {
            console.error("Item not found in JSON file");
          }
        } catch (err) {
          console.error("Error reading or parsing JSON data:", err);
        }
      } else {
        console.error("JSON file does not exist");
      }

      mongoose.connection.close();
    })
    .catch((err) => {
      console.error("Error updating item:", err);
      mongoose.connection.close();
    });
};

// Remove item from database and JSON file
const removeItem = (_id) => {
  Item.deleteOne({ _id })
    .then((item) => {
      console.info("Item has been removed from the database");

      // Read existing data from the JSON file
      const filePath = "./seed_data/dataSeed.json";
      if (fs.existsSync(filePath)) {
        try {
          const fileData = fs.readFileSync(filePath, "utf8");
          let data = JSON.parse(fileData);

          // Filter out the item to remove
          data = data.filter((item) => item._id !== _id);

          // Write the updated data back to the JSON file
          fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
          console.info(`Item has been removed from ${filePath}`);
        } catch (err) {
          console.error("Error reading or parsing JSON data:", err);
        }
      } else {
        console.error("JSON file does not exist");
      }

      mongoose.connection.close();
    })
    .catch((err) => {
      console.error("Error removing item:", err);
      mongoose.connection.close();
    });
};

//list all items
const listItems = () => {
  const filePath = "./seed_data/dataSeed.json";
  if (fs.existsSync(filePath)) {
    try {
      const fileData = fs.readFileSync(filePath, "utf8");
      const data = JSON.parse(fileData);
      console.info(data);
      console.info(`${data.length} items`);
    } catch (err) {
      console.error("Error reading or parsing JSON data:", err);
    }
  } else {
    console.error("JSON file does not exist");
  }
};

//the following commands are to be linked with the router.js file
//GET /items?search=<searchTerm></searchTerm>
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

// Get all data from dataSeed.json
const getDataFromSeed = (req, res) => {
  const filePath = path.join(__dirname, "..", "seed_data", "dataSeed.json");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    } catch (parseErr) {
      res.status(500).json({ message: parseErr.message });
    }
  });
};

//display hello world to the api
const helloWorld = (req, res) => {
  res.send("Hello World!");
};

//export modules
module.exports = {
  addItem,
  findItem,
  updateItem,
  removeItem,
  listItems,
  searchItems,
  helloWorld,
  getDataFromSeed,
};
