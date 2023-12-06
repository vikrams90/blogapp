// importing database
const blogCollection = require("../models/blogModel");
const userCollection = require("../models/userModel");
const asyncHandler = require("express-async-handler");
// creating controllers for routes

const getAllBlogs = asyncHandler(async (req, res) => {
  const allBlogs = await blogCollection.find({user : req.user._id});
  if (!allBlogs && allBlogs.length === 0) {
    res.status(404);
    throw new Error("No Blogs Found");
  }
  res.status(200).json(allBlogs);
})

const getBlog = asyncHandler(async (req, res) => {
    const Blog = await blogCollection.findById(req.params.id);
    if (!Blog) {
      res.status(401);
      throw new Error("No Blog found");
  }
  
  if (Blog.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("Not Authorized");
  }
    res.status(200).json(Blog);

});

const createBlog = async (req, res) => {
  const { title, article, author, isPublished } = req.body;
  if (!title || !article || !author || !isPublished) {
    res.status(400);
    throw new Error("Please fill all details");
  }



  const newBlog = await blogCollection.create({
    title,
    article,
    author,
    isPublished,
    user : req.user._id
  });

  if (!newBlog) {
    res.status(401);
    throw new Error("Invalid Data");
  }

  res.status(201).json(newBlog);
};

const updateBlog = async (req, res) => {

  const blog = await blogCollection.findById(req.params.id)
  
  if (blog.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("Not Authorized");
  }

  const updateBlog = await blogCollection.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!updateBlog) {
    res.status(401);
    throw new Error("can't update Blog");
  }
  res.status(200).json(updateBlog);
};

const deleteBlog = async (req, res) => {

  const blog = await blogCollection.findById(req.params.id)
  
  if (blog.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("Not Authorized");
  }

  const deletedBlog = await blogCollection.findByIdAndDelete(req.params.id);
  if (!deletedBlog) {
    res.status(400);
    throw new Error("no Blog found to delete Bad Request");
  }
  res.json({
    isDeleted: true,
    msg: "deleted succesfully",
  });
};

// exporting controllers module

module.exports = {
  getAllBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
};
