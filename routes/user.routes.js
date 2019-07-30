const express = require('express');

const userController = require('../controllers/user.controller');

const {
  validateParam,
  validateBody,
  schemas
} = require('../helpers/route-helpers');

const router = express.Router();

router
  .route('/users')
  .get(userController.index)
  .post(validateBody(schemas.userSchema), userController.newUser);

router
  .route('/users/:id')
  .get(validateParam(schemas.idSchema, 'id'), userController.getUser)
  .put(
    [validateParam(schemas.idSchema, 'id'), validateBody(schemas.userSchema)],
    userController.replaceUser
  )
  .patch(
    [
      validateParam(schemas.idSchema, 'id'),
      validateBody(schemas.userSchemaOptional)
    ],
    userController.updateUser
  )
  .delete(userController.deleteUser);

router
  .route('/users/:id/cars')
  .get(validateParam(schemas.idSchema, 'id'), userController.getUserCars)
  .post(
    validateParam(schemas.idSchema, 'id'),
    validateBody(schemas.userCarSchema),
    userController.newUserCar
  );

module.exports = router;
