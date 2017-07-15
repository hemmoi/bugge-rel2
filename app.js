var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// Winston for debugging
  var winston = require('winston');

  winston.log('info', 'Hello distributed log files!');
  winston.info('Hello again distributed logs');

  winston.level = 'debug';
  winston.log('debug', 'Now my debug messages are written to console!');

// END Winston

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.json());
// app.use(express.urlencoded()); // to support URL-encoded bodies

// APIs
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/bugge');

var Errors = require('./models/errors.js');

// ----->>>> POST ERRORS <<<< --------------
app.post('/errors', function(req, res) {
  var error = req.body;
  winston.log('debug', "POST-HEADER:" + JSON.stringify(req.headers['content-type']));
  winston.log('debug', "POST:" + JSON.stringify(error));
  Errors.create(error, function(err, errors){
    if(err) {
      throw err;
    }
    res.json(errors);
  })
});

// ----->>>>  GET ERRORS <<<<---------
app.get('/errors', function(req, res) {
  Errors.find(function(err, errors) {
    if(err) {
      throw err;
    }
    res.json(errors);
  })
});

// ----->>>>  DELETE ERRORS <<<<---------
app.delete('/errors/:_id', function(req, res) {
  var query = {_id: req.params._id};
  winston.log('debug', "DELETE:" + req.body);
  Errors.remove(query, function(err, errors) {
    if(err) {
      throw err;
    }
    res.json(errors);
  })
});

// ----->>>>  UPDATE ERRORS <<<<---------
app.put('/errors/:_id', function(req, res) {
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


// END APIs

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
