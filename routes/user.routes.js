const express = require('express');

const userController = require('../controllers/user.controller');

const router = express.Router();

router
  .route('/users')
  .get(userController.index)
  .post(userController.newUser);

router
  .route('/users/:id/cars')
  .get(userController.getUserCars)
  .post(userController.newUserCar);

router
  .route('/users/:id')
  .get(userController.getUser)
  .put(userController.replaceUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
