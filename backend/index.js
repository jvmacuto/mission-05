const express = require("express");
const mongoose = require("mongoose");
const itemsRouter = require("./routes/routes"); // Ensure path to routes is correct

const app = express();
const port = process.env.PORT || 3006;

// Middleware to parse JSON requests
app.use(express.json());

// Use the routes defined in routes.js with '/api' prefix
app.use("/api", itemsRouter); // Prefix all routes with /api

// Check if a mongoose connection already exists to avoid multiple connections
if (mongoose.connection.readyState === 0) {
  // Connect to MongoDB
  mongoose
    .connect("mongodb://127.0.0.1:27017/auctiondatabase")
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.error("MongoDB connection error:", err));
}

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
