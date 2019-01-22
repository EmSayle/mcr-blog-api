const User = require('../models/user');

exports.create = (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  user.save()
    .then(() => {
      res.status(201).json(user.toObject());
    });
};
