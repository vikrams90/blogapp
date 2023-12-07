// impoting express
const express = require("express");
const app = express();
const cors = require('cors');

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

//

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   next();
// });

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// get request handle
app.get("/", (req, res) => {
  res.json({
    msg: "Welcome to Blog",
  });
});

// creating route /api/blogs which will be handled in routes file
app.use("/api/user", require("./routes/userRoutes"));
app.use("/api/blogs", require("./routes/blogRoutes"));
app.use("/api/blogs/comments", require("./routes/commentRoutes"));


app.use(errorHandler)
// starting server
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
