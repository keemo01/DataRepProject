var express = require('express');
var router = express.Router();

//This is what happens when they click on the Help page
router.get('/', function(req, res, next) {
  res.render('help', { title: "What can we help you with?" });
});

  module.exports = router;