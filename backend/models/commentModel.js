
const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    comment: {
      type: String,
      required: true,
    },

    userName: {
      type: String,
      required: true,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref : "User"
        },
    
    blog: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref : "Blog"
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Comment", commentSchema);
