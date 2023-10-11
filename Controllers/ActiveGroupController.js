const Groups = require("../models/Groups");
const Posts = require("../models/Posts");

module.exports.createPost = async (req, res) => {
  try {
    const post = new Posts(req.body); // Enter the  input from the user
    const data = await post.save(); // data from the post to be saved
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
module.exports.createGroup = async (req, res) => {
  try {
    const group = new Groups(req.body); // Enter the input  from the user
    const data = await group.save(); // data from the post to be saved
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



module.exports.getAllGroups = async (req, res) => {
    try {
        const groups = await Groups.find();
        res.status(200).json(groups);
    }catch(err) {
        res.status(500).json({error: err.message});
    }
};

module.exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Posts.find();
        res.status(200).json(posts);
    }catch(err) {
        res.status(500).json({error: err.message});
    }
};

module.exports.mostActiveGroup = async (req,res) => {
    try {
        const result = await Groups.aggregate([
            {
                $lookup: {
                    from: "posts",
                    localField: "group_id",
                    foreignField: "group_id",
                    as: "group_posts",
                },
            },
            {
                $addFields: {
                    totalPosts:{
                        $size : "$group_posts"
                    },
                },
            },
            {
                $sort : {
                    totalPosts: -1,
                },
            },
            {
                $limit : 2,
            }
        ]);
        
        if(result.length === 0) {
            res.status(404).json({message: "No active group found"});
        }
        else {
            res.status(200).json(result);
        }
    }catch(err) {
        res.status(500).json({error: err.message})
    }
};
