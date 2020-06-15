const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// Bug Model
const Bug = require('../../models/Bug');

// @route GET api/bugs
// @desc  Get all Bugs
// @access Public
router.get('/', (req, res) => {
    Bug.find()
        .sort({ date: -1 })
        .then(bugs => res.json(bugs))
});

// @route POST api/bugs
// @desc  Create A Bug
// @access Private
router.post('/', auth, (req, res) => {
    const newBug = new Bug({
        name: req.body.name
    });

    newBug.save().then(bug => res.json(bug));
});

// @route DELETE api/bugs/:id
// @desc  Delete A Bug
// @access Private
router.delete('/:id', auth, (req, res) => {
    Bug.findById(req.params.id)
        .then(bug => bug.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});


module.exports = router;