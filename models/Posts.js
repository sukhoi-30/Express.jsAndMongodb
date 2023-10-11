const mongoose = require("mongoose");

const PostsSchema = mongoose.Schema({
  post_id: {
    type: String,
    required: true,
    unique: true,
  },
  group_id: {
    type: String,
    required: true,
  },
  post_desc: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  comments: {
    type: String,
  },
});
module.exports = mongoose.model("Posts", PostsSchema);
