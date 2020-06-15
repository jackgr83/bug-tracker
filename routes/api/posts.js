const express = require("express");
const router = express.Router();

// Load Post model
const Post = require("../../models/Posts");

router.get("/posts", (req, res) => {
  console.log("post");
});

router.post("/posts", (req, res) => {
  console.log("post");
  const newPost = new Post({
    title: req.body.title,
    description: req.body.description,
    status: req.body.status,
  }).save();
});

module.exports = router;
