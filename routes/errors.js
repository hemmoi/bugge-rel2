var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var winston = require('winston');
winston.level = 'debug';


var Errors = require('../models/errors.js');

// -------->>> AUTHENTICATE USER <<<<----------
router.use('/', function (req, res, next) {
    jwt.verify(req.query.token, 'secret', function (err, decoded) {
        if (err) {
            return res.status(401).json({
                title: 'Not Authenticated',
                error: err
            });
        }
        next();
    })
});

// ----->>>> POST ERRORS <<<< --------------
router.post('/', function(req, res, next) {
  // var decoded = jwt.decode(req.query.token);
  var error = req.body;
  Errors.create(error, function(err, errors){
    if(err) {
      throw err;
    }
    res.json(errors);
  })
});

// ----->>>>  GET ALL ERRORS <<<<---------
router.get('/', function(req, res, next) {
  // var decoded = jwt.decode(req.query.token);
  Errors.find(function(err, errors) {
    if(err) {
      throw err;
    }
    res.json(errors);
  })
});

// ----->>>>  GET ONE ERROR <<<<---------
router.get('/one/:_id', function(req, res, next) {
  var query = {_id: req.params._id};
  Errors.findOne(query, function(err, error) {
    if(err) {
      throw err;
    }
    res.json(error);
  })
});

// ----->>>>  DELETE ERRORS <<<<---------
router.delete('/:_id', function(req, res, next) {
  // var decoded = jwt.decode(req.query.token);
  var query = {_id: req.params._id};
  Errors.remove(query, function(err, errors) {
    if(err) {
      throw err;
    }
    res.json(errors);
  })
});

// ----->>>>  UPDATE ERRORS <<<<---------
router.put('/:_id', function(req, res, next) {
  // var decoded = jwt.decode(req.query.token);
  var error = req.body;
  var query = {_id: req.params._id};
  var update = {
    '$set': {
      title: error.title,
      description: error.description,
      steps: error.steps,
      comments: error.comments,
      status: error.status
      }
  }; 


  // When true returns the updated document
  var options = {new: true};

  Errors.findOneAndUpdate(query, update, options, function(err, errors) {
    if(err) {
      throw err;
    }
    res.json(errors);
  })
  
});

module.exports = router;
