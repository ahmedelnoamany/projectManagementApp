var express = require('express');
var router = express.Router();
var models = require('../server/models/index');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/list', function(req, res) {
  models.List.create({
    name: req.body.name
  }).then(function(list) {
    res.json(list);
  });
});
module.exports = router;
