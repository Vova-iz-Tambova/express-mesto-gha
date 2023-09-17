const User = require('../models/user');

module.exports.getUsers = (req, res) => {
  User.find({})
    .then(users => res.send(users))
};

module.exports.getUser = (req, res) => {
  User.findById(req.params.id)
    .then(user => res.send(user))
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then(user => res.send(user))
};

module.exports.updateUser = (req, res) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate({ name, about }, req.user._id)
    .then(user => res.send(user))
};

module.exports.updateAvatar = (req, res) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate({ avatar }, req.user._id)
    .then(user => res.send(user))
};