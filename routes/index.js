var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Busola's Blog" });
});

router.get('/', function(req, res){
  res.render('index', {query: "Hello World"})
});

module.exports = router;
