// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;

var express = require("express");
var router = express.Router();
var Book = require("../models/Book");

/* GET ALL Todo */
router.get("/", function(req, res, next) {
  Book.find(function(err, books) {
    if (err) return next(err);
    res.json(books);
  });
});

module.exports = router;