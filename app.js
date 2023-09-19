const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');

const app = express();
app.use(express.json());
app.use(helmet());
app.use((req, res, next) => {
  req.user = {
    _id: '65094fe092acf8eb548aafb0',
  };
  next();
});

mongoose.connect('mongodb://localhost:27017/mestodb');

app.use('/users', require('./routes/users'));
app.use('/cards', require('./routes/cards'));

app.listen(3000);
