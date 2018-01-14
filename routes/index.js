var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/icushion', function(req, res, next) {
    res.render('icushion', { title: 'Express' });
});

router.get('/sandword', function(req, res, next) {
    res.render('sandword', { title: 'Express' });
});

router.get('/wandpoint', function(req, res, next) {
    res.render('wandpoint', { title: 'Express' });
});

module.exports = router;
