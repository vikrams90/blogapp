
const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    article: {
      type: String,
      required: true,
    },

    author: {
      type: String,
      required: true,
    },

    isPublished: {
      type: Boolean,
      required: true,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref : "User"
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Blog", blogSchema);
