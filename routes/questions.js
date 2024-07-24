// routes/questions.js
const express = require('express');
const Question = require('../models/question');
const router = express.Router();

router.post('/questions', async (req, res) => {
  const { question, domain, difficulty, job } = req.body;
  const newQuestion = new Question({ question, domain, difficulty, job });
  await newQuestion.save();
  res.status(201).send('Question created');
});

router.get('/questions', async (req, res) => {
  const questions = await Question.find();
  res.send(questions);
});

module.exports = router;
 
