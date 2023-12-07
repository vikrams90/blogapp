// importing database
const commentCollection = require("../models/commentModel");
const userCollection = require("../models/userModel");
const asyncHandler = require("express-async-handler");
// creating controllers for routes

const getComment = asyncHandler(async (req, res) => {
  const allComment = await commentCollection.find({blog : req.params.id});
  if (!allComment && allComment.length === 0) {
    res.status(404);
    throw new Error("No Comment Found");
    }
  res.status(200).json(allComment);
})

const createComment = async (req, res) => {
  const { comment, blog } = req.body;
  if (!comment || !blog) {
    res.status(400);
    throw new Error("Please fill all details");
  }

    const user =   await userCollection.findById(req.user._id)  

    if (!user) {
        res.status(400);
    throw new Error("No user found");
    }

  const newComment = await commentCollection.create({
    comment,
    userName : user.name,
    blog: blog,
    user : req.user._id
  });

  if (!newComment) {
    res.status(401);
    throw new Error("Invalid Data");
  }

  res.status(201).json(newComment);
};

// const updateBlog = async (req, res) => {

//   const blog = await blogCollection.findById(req.params.id)
  
//   if (blog.user.toString() !== req.user._id.toString()) {
//     res.status(401);
//     throw new Error("Not Authorized");
//   }

//   const updateBlog = await blogCollection.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//   });
//   if (!updateBlog) {
//     res.status(401);
//     throw new Error("can't update Blog");
//   }
//   res.status(200).json(updateBlog);
// };

// const deleteBlog = async (req, res) => {

//   const blog = await blogCollection.findById(req.params.id)
  
//   if (blog.user.toString() !== req.user._id.toString()) {
//     res.status(401);
//     throw new Error("Not Authorized");
//   }

//   const deletedBlog = await blogCollection.findByIdAndDelete(req.params.id);
//   if (!deletedBlog) {
//     res.status(400);
//     throw new Error("no Blog found to delete Bad Request");
//   }
//   res.json({
//     isDeleted: true,
//     msg: "deleted succesfully",
//   });
// };

// exporting controllers module

module.exports = {
    createComment,
    getComment,
};
