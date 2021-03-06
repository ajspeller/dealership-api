const Joi = require('joi');

module.exports = {
  validateParam: (schema, name) => {
    return (req, res, next) => {
      const result = Joi.validate(
        {
          param: req.params[name]
        },
        schema
      );
      if (result.error) {
        return res.status(400).json(result.error);
      }
      if (!req.value) {
        req.value = {};
      }
      if (!req.value.params) {
        req.value.params = {};
      }

      req.value.params[name] = result.value.param;
      next();
    };
  },

  validateBody: (schema) => {
    return (req, res, next) => {
      const result = Joi.validate(req.body, schema);

      if (result.error) {
        return res.status(400).json(result.error);
      }

      if (!req.value) {
        req.value = {};
      }
      if (!req.value.body) {
        req.value.body = {};
      }
      req.value.body = result.value;
      next();
    };
  },

  schemas: {
    idSchema: Joi.object()
      .keys({
        param: Joi.string()
          .regex(/^[0-9a-fA-F]{24}$/)
          .required()
      })
      .required(),
    userSchema: Joi.object().keys({
      firstname: Joi.string().required(),
      lastname: Joi.string().required(),
      email: Joi.string()
        .email()
        .required()
    }),
    userSchemaOptional: Joi.object().keys({
      firstname: Joi.string(),
      lastname: Joi.string(),
      email: Joi.string().email()
    }),
    userCarSchema: Joi.object().keys({
      make: Joi.string().required(),
      model: Joi.string().required(),
      year: Joi.number().required()
    }),
    carSchema: Joi.object().keys({
      make: Joi.string().required(),
      model: Joi.string().required(),
      year: Joi.number().required(),
      seller: Joi.string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .required()
    }),
    putCarSchema: Joi.object().keys({
      make: Joi.string().required(),
      model: Joi.string().required(),
      year: Joi.number().required()
    }),
    patchCarSchema: Joi.object().keys({
      make: Joi.string(),
      model: Joi.string(),
      year: Joi.number()
    })
  }
};
