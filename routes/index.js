var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({
    data:"get hello world"
  })
});

router.post('/', function(req, res, next) {
  res.send({
    data:"post hello world"
  })
});

module.exports = router;
