// routes/jobs.js
const express = require('express');
const Job = require('../models/job');
const router = express.Router();

router.post('/jobs', async (req, res) => {
  const { title, description, requirements, responsibilities } = req.body;
  const job = new Job({ title, description, requirements, responsibilities, createdBy: req.user.userId });
  await job.save();
  res.status(201).send('Job created');
});

router.get('/jobs', async (req, res) => {
  const jobs = await Job.find();
  res.send(jobs);
});

module.exports = router;
 
