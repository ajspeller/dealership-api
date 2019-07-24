const express = require('express');

const carController = require('../controllers/car.controller');

const router = express.Router();

router
  .route('/cars')
  .get(carController.index)
  .post();

router
  .route('/cars/:id')
  .get()
  .delete()
  .patch()
  .put();

module.exports = router;
