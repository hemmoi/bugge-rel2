"use strict"
var mongoose = require('mongoose');

var commentsSchema = mongoose.Schema({
    reportId: String,
    time: String,
    created: String,
    commentText: String
});

var Comments = mongoose.model('Comments', commentsSchema);
module.exports = Comments;