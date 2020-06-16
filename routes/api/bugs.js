const express = require("express");
const router = express.Router();

// Bug Model
const Bug = require("../../models/Bug");

// @route GET api/bugs
// @desc  Get all Bugs
// @access Public
router.get("/", (req, res) => {
  Bug.find()
    .sort({ date: -1 })
    .then((bugs) => res.json(bugs));
});

// @route POST api/bugs/create
// @desc  Create A Bug
// @access Private
router.post("/create", (req, res) => {
  const newBug = new Bug({
    name: req.body.name,
    description: req.body.description,
    status: req.body.status,
  });

  newBug.save().then((bug) => res.json(bug));
});

// @route DELETE api/bugs/delete/:id
// @desc  Delete A Bug
// @access Private
router.delete("/delete/:id", (req, res) => {
  Bug.findById(req.params.id)
    .then((bug) => bug.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

// @route patch api/bugs/update/:id
// @desc  Update A Bug
// @access Private
router.patch("/update/:id", (req, res) => {
  Bug.findById(req.params.id)
    .then((bug) =>
      bug
        .update({ $set: { name: req.body.name } })
        .then(() => res.json({ success: true }))
    )
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
