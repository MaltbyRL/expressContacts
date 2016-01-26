'use strict';

var express = require('express');
var router = express.Router();
var fs = require('fs');
var USERDATA = './data/users.json';

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readFile(USERDATA, function(err, data) {
    var users = JSON.parse(data);
    res.render('show', { title: 'Contact Info', user: user});
  });
});

module.exports = router;

res.render('show', {user: user})

//jade, h1 = user.name
