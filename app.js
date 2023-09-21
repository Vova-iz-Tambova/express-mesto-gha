const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const { createUser, login } = require('./controllers/users');

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

app.post('/signin', login);
app.post('/signup', createUser);
app.use('/users', require('./routes/users'));
app.use('/cards', require('./routes/cards'));

app.use('/*', (req, res) => {
  res.status(404)
    .send({ message: 'Страница не найдена' });
});

app.listen(3000);
