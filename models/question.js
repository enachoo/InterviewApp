 
// models/question.js
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  question: String,
  domain: String,
  difficulty: Number,
  job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' }
});

module.exports = mongoose.model('Question', questionSchema);
