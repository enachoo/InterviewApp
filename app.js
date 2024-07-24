const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const jobRoutes = require('./routes/jobs');
const questionRoutes = require('./routes/questions');

const app = express();

app.use(bodyParser.json());
app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/questions', questionRoutes);

module.exports = app;
 
