const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');

const app = express();

app.use(helmet());
app.use((req, res, next) => {
  req.user = {
    _id: '650870fe9d227343d22bd2a6',
  };
  next();
});

app.use('/users', require('./routes/users'));
app.use('/cards', require('./routes/cards'));

app.use(express.json());
mongoose.connect('mongodb://127.0.0.1:27017/mestodb');

app.listen(3000);
