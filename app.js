var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var indexRoute = require('./routes/index');
var errorsRoute = require('./routes/errors');
var userRoute = require('./routes/user');
var emailRoute = require('./routes/email');
var commentsRoute = require('./routes/comments');

var envFile = require('node-env-file');
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
try {
  envFile(path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env'));
} catch (e) {

}

// Winston for debugging
// var winston = require('winston');
// winston.level = 'debug';

var app = express();
mongoose.connect(process.env.DB_ADDRESS);


// END Winston

// // view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

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

app.get('*', function(req, res){
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

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
