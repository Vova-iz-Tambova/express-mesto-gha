const Card = require('../models/card')

module.exports.getCards = (req, res) => {
  Card.find({})
    .then(cards => res.send(cards))
};

module.exports.createCard = (req, res) => {
  const { name, link } = req.body;
  Card.create({ name, link, owner: req.user._id })
    .then(cards => res.send(cards))
};

module.exports.deleteCard = (req, res) => {
  Card.findByIdAndRemove(req.params.cardId)
    .then(cards => res.send(cards))
};