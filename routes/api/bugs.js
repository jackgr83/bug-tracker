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
    priority: req.body.priority,
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

// @route patch api/bugs/update/name/:id
// @desc  Update A Bug Name
// @access Private
router.patch("/update/name/:id", (req, res) => {
  Bug.findById(req.params.id)
    .then((bug) =>
      bug
        .updateOne({ $set: { name: req.body.name } })
        .then(() => res.json({ success: true }))
    )
    .catch((err) => res.status(404).json({ success: false }));
});

// @route patch api/bugs/update/description/:id
// @desc  Update A Bug description
// @access Private
router.patch("/update/description/:id", (req, res) => {
  Bug.findById(req.params.id)
    .then((bug) =>
      bug
        .updateOne({ $set: { description: req.body.description } })
        .then(() => res.json({ success: true }))
    )
    .catch((err) => res.status(404).json({ success: false }));
});

// @route patch api/bugs/update/status/:id
// @desc  Update A Bug Status
// @access Private
router.patch("/update/status/:id", (req, res) => {
  Bug.findById(req.params.id)
    .then((bug) =>
      bug
        .updateOne({ $set: { status: req.body.status } })
        .then(() => res.json({ success: true }))
    )
    .catch((err) => res.status(404).json({ success: false }));
});

// @route patch api/bugs/update/priority/:id
// @desc  Update A Bug priority
// @access Private
router.patch("/update/priority/:id", (req, res) => {
  Bug.findById(req.params.id)
    .then((bug) =>
      bug
        .updateOne({ $set: { priority: req.body.priority } })
        .then(() => res.json({ success: true }))
    )
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
