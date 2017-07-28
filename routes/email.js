var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer'); 
var smtpTransport = require('nodemailer-smtp-transport');
var config = require('../config/email.json');
var winston = require('winston');
winston.level = 'debug';

// ----->>>> SEND EMAIL <<<< --------------
router.post('/', function(req, res) {
  var sendTo = req.body.createdBy + ", " 
                + req.body.currentUser + ", " 
                + req.body.newAssignedTo + ", " 
                + req.body.oldAssignedTo;

  var transporter = nodemailer.createTransport({
      host: "smtp-mail.outlook.com", // hostname
      secureConnection: false, // TLS requires secureConnection to be false
      port: 587, // port for secure SMTP
      tls: {
        ciphers:'SSLv3'
      },
      auth: {
          user: config.email,
          pass: config.password
      }
  });

  var mailOptions = {
    from: config.email,
    to: sendTo,
    subject: 'Bugge report update',
    // text: 'Error report: ' + req.body.title + ' was updated. Please log into Bugge to see the latest status.',
    html: 'Error report: <b>' + req.body.title + '</b> was updated<br><br> Please log into Bugge to see the latest status.'
  };

  transporter.sendMail(mailOptions, function(err, info){
    if (err) {
      console.log(err);
    } else {
      // console.log('Email sent: ' + info.response);
    }
  }); 
});

module.exports = router;
