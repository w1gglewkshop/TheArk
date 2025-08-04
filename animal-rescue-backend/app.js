const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const authRouter = require('./routes/auth');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/auth', authRouter);

app.get('/', (req, res) => {
  res.json({ message: 'Animal Rescue API running.' });
});

module.exports = app;
