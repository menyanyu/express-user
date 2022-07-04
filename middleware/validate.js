const { validationResult } = require('express-validator');

// parallel processing
module.exports= validate = validations => {
  return async (req, res, next) => {
    await Promise.all(validations.map(validation => validation.run(req)));
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    res.status(400).send({ errors: errors.array() });
  };

};