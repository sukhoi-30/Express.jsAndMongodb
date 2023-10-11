const mongoose = require("mongoose");

const GroupsSchema = mongoose.Schema({
  group_id: {
    type: String,
    required: true,
  },
  group_name: {
    type: String,
    required: true,
    unique: true,
  },
  group_desc: {
    type: String,
    required: true,
  },
  groupStrength: {
    type: Number,
    required: true,
  },
});
module.exports = mongoose.model("Groups", GroupsSchema);
