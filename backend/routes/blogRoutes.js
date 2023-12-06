// handling routes here
const express = require("express");

// importing controllers
const {
  getAllBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogControllers");
const auth = require("../middleware/authHandler");

// importing express router to handle routes
const router = express.Router();

// all blogs route and request
router.get("/", auth, getAllBlogs);

// single blog routes and requests
router.get("/:id", auth, getBlog);
router.post("/", auth, createBlog);
router.put("/:id", auth, updateBlog);
router.delete("/:id", auth, deleteBlog);

// exporting router module
module.exports = router;
