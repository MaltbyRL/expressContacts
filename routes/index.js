'use strict';

var express = require('express');
var router = express.Router();
var fs = require('fs');
var USERDATA = './data/users.json';

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readFile(USERDATA, function(err, data) {
    var users = JSON.parse(data);
    res.render('index', { title: 'Contacts', users: users});
  });
});

module.exports = router;
