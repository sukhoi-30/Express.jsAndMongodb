const express = require("express");




const {
  createPost,
  createGroup,
  getAllGroups,
  getAllPosts,
  mostActiveGroup
} = require("../Controllers/ActiveGroupController");

const router = express.Router();


router.post("/posts", createPost);
router.post("/groups", createGroup);
router.get("/getAllgroups", getAllGroups);
router.get("/getallposts", getAllPosts);
router.get("/mostactive",mostActiveGroup);



module.exports = router;
