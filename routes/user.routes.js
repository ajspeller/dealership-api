const express = require('express');

const userController = require('../controllers/user.controller');

const { validateParam, schemas } = require('../helpers/route-helpers');

const router = express.Router();

router
  .route('/users')
  .get(userController.index)
  .post(userController.newUser);

router
  .route('/users/:id')
  .get(validateParam(schemas.idSchema, 'id'), userController.getUser)
  .put(userController.replaceUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

router
  .route('/users/:id/cars')
  .get(userController.getUserCars)
  .post(userController.newUserCar);

module.exports = router;
