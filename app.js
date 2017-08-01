var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var mongodb = require('./config/mongodb.json');

var indexRoute = require('./routes/index');
var errorsRoute = require('./routes/errors');
var userRoute = require('./routes/user');
var emailRoute = require('./routes/email');
var commentsRoute = require('./routes/comments');

var app = express();
mongoose.connect(mongodb.remote);
//mongoose.connect(mongodb.local);

// Winston for debugging
  var winston = require('winston');

  // winston.log('info', 'Hello distributed log files!');
  // winston.info('Hello again distributed logs');

  winston.level = 'debug';
  // winston.log('debug', 'Now my debug messages are written to console!');

// END Winston

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public/images', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.json());
// app.use(express.urlencoded()); // to support URL-encoded bodies

app.use('/errors', errorsRoute);
app.use('/user', userRoute);
app.use('/email', emailRoute);
app.use('/comments', commentsRoute);
app.use('/', indexRoute);

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
