"use strict"
var mongoose = require('mongoose');

var errorsSchema = mongoose.Schema({
    title: String,
    description: String,
    steps: String,
    comments: String,
    status: String,
    assigned: String
});

var Errors = mongoose.model('Errors', errorsSchema);
module.exports = Errors;