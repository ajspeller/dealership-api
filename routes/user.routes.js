const express = require('express');

const userController = require('../controllers/user.controller');

const router = express.Router();

router
  .route('/users')
  .get(userController.index)
  .post(userController.newUser);

router
  .route('/users/:id')
  .get()
  .put()
  .patch()
  .delete();

router
  .route('/users/:id/cars')
  .get()
  .post();

module.exports = router;
