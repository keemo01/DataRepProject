var express = require('express');
var router = express.Router();

//This is what happens when they click on About Us
router.get('/', function(req, res, next) {
  res.render('aboutus', { title: "More About Us" });
});

  module.exports = router;