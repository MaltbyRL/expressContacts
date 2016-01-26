'use strict';

var express = require('express');
var router = express.Router();
var fs = require('fs');
var USERDATA = './data/users.json';

/* GET users listing. */
router.get('/', function(req, res, next) {
  fs.readFile(USERDATA, function(err, data) {
    var users = JSON.parse(data);
    res.send(users);
  });
});

router.post('/', function(req, res, next) {
  fs.readFile(USERDATA, function(err, data) {
    var users = JSON.parse(data);
    users.push(req.body);
    fs.writeFile(USERDATA, JSON.stringify(users), function(err) {
      res.status(err ? 400 : 200).send(err || users);
    });
  });
});

module.exports = router;
//
