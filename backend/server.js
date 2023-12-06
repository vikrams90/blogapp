// impoting express
const express = require("express");
const app = express();

// using dotenv module for environmental variables
require("dotenv").config();

// assigning port value to port variable
const PORT = process.env.port || 3000;

// connecting database
const { connectDB } = require("./config/db_config");
const errorHandler = require("./middleware/errorHandler");

connectDB();

// Body parser middleware for getting data from body of the request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// get request handle
app.get("/", (req, res) => {
  res.json({
    msg: "Welcome to Blog",
  });
});

// creating route /api/blogs which will be handled in routes file
app.use("/api/user", require("./routes/userRoutes"));
app.use("/api/blogs", require("./routes/blogRoutes"));


app.use(errorHandler)
// starting server
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
