"use strict"
var mongoose = require('mongoose');

var errorsSchema = mongoose.Schema({
    title: String,
    description: String,
    steps: String,
    comments: String,
    status: String,
    assignedTo: String,
    createdBy: {
        firstName: String,
        lastName: String,
        email: String
    },
    targetDate: String
});

var Errors = mongoose.model('Errors', errorsSchema);
module.exports = Errors;