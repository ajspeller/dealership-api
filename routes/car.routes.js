const express = require('express');

const carController = require('../controllers/car.controller');
const {
  validateBody,
  validateParam,
  schemas
} = require('../helpers/route-helpers');

const router = express.Router();

router
  .route('/cars')
  .get(carController.index)
  .post(validateBody(schemas.newCarSchema), carController.newCar);

router
  .route('/cars/:id')
  .get(validateParam(schemas.idSchema, 'id'), carController.getCar)
  .delete()
  .patch()
  .put();

module.exports = router;
