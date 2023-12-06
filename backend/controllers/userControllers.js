const asyncHandler = require("express-async-handler");
const bcryptjs = require("bcryptjs");
const userCollection = require("../models/userModel");
const jwt = require("jsonwebtoken");

const registerUser = asyncHandler(async (req, res) => {
  console.log("registeruser",req.body)
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("please fill all details");
  }

  const userExist = await userCollection.findOne({ email: email });
  console.log(userExist);
  if (userExist) {
    res.status(400);
    throw new Error("user already register");
  }

  const salt = await bcryptjs.genSalt(10);
  const hashPassword = await bcryptjs.hash(password, salt);

  const user = await userCollection.create({
    name,
    email,
    password: hashPassword,
  });

  if (user) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateJWT(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("please fill all details");
  }

  const user = await userCollection.findOne({ email: email });
  console.log(user)

  if (user && (await bcryptjs.compare(password, user.password))) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateJWT(user._id),
    });
  } else {
    res.status(401)
    throw new Error("Invalid user credential");
  }
});

const generateJWT = (id) => {
  return jwt.sign({ id }, process.env.JWT_KEY, {
    expiresIn: "30d",
  });
};

module.exports = {
  registerUser,
  loginUser,
};
