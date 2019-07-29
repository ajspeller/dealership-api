const User = require('../models/User.model');
const Car = require('../models/Car.model');

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
  },
  getUser: async (req, res, next) => {
    const { id } = req.params;
    try {
      const user = await User.findById(id);
      res.status(200).send(user);
    } catch (err) {
      next(err);
    }
  },
  replaceUser: async (req, res, next) => {
    // must contain all fo the fields
    const { id } = req.params;
    const newUser = req.body;
    try {
      const result = await User.findByIdAndUpdate(id, newUser);
      console.log(result);
      res.status(200).json({
        success: true
      });
    } catch (err) {
      next(err);
    }
  },
  updateUser: async (req, res, next) => {
    const { id } = req.params;
    const newUser = req.body;
    try {
      await User.findByIdAndUpdate(id, newUser);
      res.status(200).json({
        success: true
      });
    } catch (err) {
      next(err);
    }
  },
  deleteUser: async (req, res, next) => {
    const { id } = req.params;
    try {
      await User.findByIdAndRemove(id);
      res.status(301).json({
        success: true
      });
    } catch (err) {
      next(err);
    }
  },
  getUserCars: async (req, res, next) => {
    const { id } = req.params;
    try {
      const user = await User.findById(id).populate('cars');
      const { cars } = user;
      res.status(200).json(cars);
    } catch (err) {
      next(err);
    }
  },
  newUserCar: async (req, res, next) => {
    const { id } = req.params;
    const { make, model, year } = req.body;
    const newCar = new Car({
      make,
      model,
      year
    });

    try {
      const user = await User.findById(id);
      newCar.seller = user._id;
      try {
        await newCar.save();
        user.cars.push(newCar);
        try {
          await user.save();
          res.status(201).json({
            user,
            newCar
          });
        } catch (err) {
          next(err);
        }
      } catch (err) {
        next(err);
      }
    } catch (err) {
      next(err);
    }
  }
};
