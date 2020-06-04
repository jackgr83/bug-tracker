// const express = require("express");
// const router = express.Router();
// //Login Page
// router.get("/login", (req, res) => res.render("login"));

// //Register Page
// router.get("/register", (req, res) => res.render("register"));

// module.exports = router;

var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json([{ id: 1, username: "wack" }]);
});

module.exports = router;
