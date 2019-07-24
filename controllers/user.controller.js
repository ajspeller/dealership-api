const User = require('../models/User.model');

module.exports = {
  index: async (req, res, next) => {
    try {
      const users = await User.find({});
      res.status(200).send(users);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  newUser: async (req, res, next) => {
    console.log(req.body);
    const { firstname, lastname, email, cars } = req.body;
    const user = new User({
      firstname,
      lastname,
      email,
      cars
    });
    try {
      const newUser = await user.save();
      res.status(201).send(newUser);
    } catch (err) {
      if (err) {
        next(err);
      }
    }
  }
};
