const express = require('express');

const skillsRouter = require('./routes/skillsRoutes');
const projectsRouter = require('./routes/projectsRoutes');
const emailRouter = require('./routes/emailRoutes');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  next();
});

app.use('/api/skills', skillsRouter);
app.use('/api/projects', projectsRouter);
app.use('/sendEmail', emailRouter);

module.exports = app;
