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

router.get('/hema', function(req, res, next) {
    res.render('hema', { title: 'Express' });
});
router.get('/lumii', function(req, res, next) {
    res.render('lumii', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
    res.render('about', { title: 'Express' });
});

module.exports = router;
