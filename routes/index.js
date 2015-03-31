var express = require('express'); 
var router = express.Router();
var home = require('./home');


var home_var = home.home();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'express' });

});


router.get('/home', function(req, res, next) {
  res.render('home', { exe: home_var, title: "Home.js"});
  home.inputUser("Bowen");

});

module.exports = router;

