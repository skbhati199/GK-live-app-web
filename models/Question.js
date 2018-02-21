var mongoose = require('mongoose');
var QuestionSchema = new mongoose.Schema({
    questionId: Number,
    questionTitle: String,
    questionDescription: String,
    publisher: String,
    createDate: { type: Date, default: Date.now },
    updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Question', QuestionSchema);