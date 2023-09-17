const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/mestodb');

app.use((req, res, next) => {
  req.user = {
    _id: '6507355882a2eea70241f847'
  };
  next();
});

app.use(express.json());
app.use('/users', require('./routes/users'));
app.use('/cards', require('./routes/cards'));

app.listen(3000);