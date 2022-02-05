var express = require('express');
var router = express.Router();

const sports = ["soccer", "basketball", "tennis", "baseball", "volleyball"];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Hello form Express');
});

router.get('/sports', function(req, res, next) {
  res.send(sports);
});

module.exports = router;
