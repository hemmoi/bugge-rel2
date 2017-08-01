var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
// var winston = require('winston');
// winston.level = 'debug';
var User = require('../models/user');

// ----->>>> ADD USER <<<< --------------
router.post('/', function(req, res) {
  var user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: bcrypt.hashSync(req.body.password, 10),
    email: req.body.email
  });
  
  User.create(user, function(err, user){
    if(err) {
      return res.status(500).json(err);
    }
    res.status(200).json(user);
  })
});

// ----->>>>  GET USER <<<<---------
router.post('/signin', function(req, res) {

  User.findOne({email:req.body.email}, function(err, user) {
    if(err) {
      throw err;
    }

    if (!user) {
      return res.status(401).json({
        message: 'Invalid login credentials'
      });
    }

    if (!bcrypt.compareSync(req.body.password, user.password)) {
      return res.status(401).json({
        message: 'Invalid login credentials',
      });
    }

    var token = jwt.sign({user: user}, 'secret', {expiresIn: 7200});
    
    res.status(200).json({
      message: 'Successfully logged in',
      token: token,
      userDetails: user
    });
  })
});

// ----->>>>  GET ALL USERS <<<<---------
router.get('/users', function(req, res, next) {

  projection = {
      password: false,
      __v: false   
  };

  User.find({}, projection, function(err, users) {
    if(err) {
      throw err;
    }
    
    res.json(users);
  })
});

module.exports = router;
