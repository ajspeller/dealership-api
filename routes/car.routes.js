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
  .post(validateBody(schemas.carSchema), carController.newCar);

router
  .route('/cars/:id')
  .get(validateParam(schemas.idSchema, 'id'), carController.getCar)
  .delete(validateParam(schemas.idSchema), carController.deleteCar)
  .patch(
    [
      validateParam(schemas.idSchema, 'id'),
      validateBody(schemas.patchCarSchema)
    ],
    carController.updateCar
  )
  .put(
    [validateParam(schemas.idSchema, 'id'), validateBody(schemas.putCarSchema)],
    carController.replaceCar
  );

module.exports = router;
