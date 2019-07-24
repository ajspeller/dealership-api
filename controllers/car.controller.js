const Car = require('../models/Car.model');

module.exports = {
  index: async (req, res, next) => {
    try {
      const cars = await Car.find({});
      res.status(200).send(cars);
    } catch (err) {
      res.status(500).send(err);
    }
  }
};
