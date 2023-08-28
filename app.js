const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000; // You can change this to any available port you prefer

// Middleware to parse JSON data
app.use(bodyParser.json());

// Storage for received JSON data
const jsonData = [];

// Endpoint to store JSON data
app.post("/data", (req, res) => {
  const data = req.body;
  jsonData.push(data);
  res.status(201).json({ message: "JSON data stored successfully" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
