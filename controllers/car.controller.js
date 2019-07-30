const Car = require('../models/Car.model');
const User = require('../models/User.model');

module.exports = {
  index: async (req, res, next) => {
    try {
      const cars = await Car.find({});
      res.status(200).send(cars);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  newCar: async (req, res, next) => {
    const car = req.value.body;
    const seller = await User.findById(req.value.body.seller);
    car.seller = seller._id;
    const newCar = new Car(car);
    try {
      await newCar.save();
      seller.cars.push(newCar);
      try {
        await seller.save();
        res.status(200).json(newCar);
      } catch (err) {
        next(err);
      }
    } catch (err) {
      next(err);
    }
  },
  getCar: async (req, res, next) => {
    const { id } = req.value.params;
    try {
      const car = await Car.findById(id);
      res.status(200).json(car);
    } catch (err) {
      next(err);
    }
  },
  deleteCar: async (req, res, next) => {
    const { id } = req.value.params;

    try {
      const car = await Car.findById(id);
      if (!car) {
        return res.status(404).json({
          error: 'Car does not exist'
        });
      }
      const sellerId = car.seller;
      try {
        const seller = await User.findById(sellerId);
        try {
          await car.remove();
          seller.cars.pull(car);
          try {
            await seller.save();
            res.status(200).json({ success: true });
          } catch (err) {
            next(err);
          }
        } catch (err) {
          next(err);
        }
      } catch (err) {
        next(err);
      }
    } catch (err) {
      next(err);
    }
  },
  updateCar: async (req, res, next) => {
    const { id } = req.value.params;
    const newCar = req.value.body;
    try {
      await Car.findByIdAndUpdate(id, newCar);
      res.status(200).json({ success: true });
    } catch (err) {
      next(err);
    }
  },
  replaceCar: async (req, res, next) => {
    const { id } = req.value.params;
    const newCar = req.value.body;
    try {
      await Car.findByIdAndUpdate(id, newCar);
      res.status(200).json({ success: true });
    } catch (err) {
      next(err);
    }
  }
};
