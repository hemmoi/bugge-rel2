var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var winston = require('winston');
winston.level = 'debug';


var Comments = require('../models/comments.js');

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

// ----->>>> POST COMMENT <<<< --------------
router.post('/', function(req, res, next) {
  // var decoded = jwt.decode(req.query.token);
  var comment = req.body;
  Comments.create(comment, function(err, comment){
    if(err) {
      throw err;
    }
    res.json(comment);
  })
});

// ----->>>>  GET ALL COMMENTS FOR A REPORT <<<<---------
router.get('/:reportId', function(req, res, next) {
  // var decoded = jwt.decode(req.query.token);
  Comments.find({ reportId: req.params.reportId }, function(err, comments) {
    if(err) {
      throw err;
    }
    res.json(comments);
  })
});


module.exports = router;
