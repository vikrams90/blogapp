const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const userCollection = require("../models/userModel");

const auth = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.includes("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const verified = jwt.verify(token, process.env.JWT_KEY);

      if (!verified) {
        res.status(401);
        throw new Error("user not authorized");
      }

      console.log(verified);
      req.user = await userCollection.findById(verified.id).select("-password");

      if (!req.user) {
        res.status(404);
        throw new Error("user not authorized");
      }

      if (!token) {
        res.status(401);
        throw new Error(
          "user not authorized initiating self destruct in 5...4..3...2...1.... "
        );
      }

      next();
    } catch (error) {
      res.status(401);
      throw new Error("user not authorized initiating ");
    }
  } else {
    throw new Error("not authorized");
  }
});

module.exports = auth;
