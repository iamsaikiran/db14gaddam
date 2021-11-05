var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mazda', { title: 'Search results for mazda' });
});

module.exports = router;