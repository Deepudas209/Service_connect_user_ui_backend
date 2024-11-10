const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

const authRoutes = require('./routes/auth');
app.use('/api/Auth', authRoutes);

console.log("mongo", process.env.MONGODB_URI);

mongoose
  .connect(process.env.MONGODB_URI) 
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

  

// Root route for testing
app.get('/', (req, res) => {
  res.send('Welcome to the API');
});