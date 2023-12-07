// handling routes here
const express = require("express");

// importing controllers

const auth = require("../middleware/authHandler");
const { getComment, createComment } = require("../controllers/commentControllers");

// importing express router to handle routes
const router = express.Router();

// all blogs route and request
router.get("/:id", auth, getComment);
router.post("/", auth, createComment);

// single blog routes and requests
// router.put("/:id", auth, );
// router.delete("/:id", auth, );

// exporting router module
module.exports = router;