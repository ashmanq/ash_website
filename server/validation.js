const Joi = require('@hapi/joi');


// The following validates usernames and passwords used for login and
// returns an error if it doesn't follow the schema below. This uses
// the npm module @hapi/joi to validate entries against the defined schema.

const loginValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string()
      .alphanum()
      .min(6)
      .max(30)
      .required(),

    password: Joi.string()
      .min(6)
      .max(1024)
      .required(),
  });
  return schema.validate(data);
};

const projectValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string()
      .alphanum()
      .max(255)
      .required(),

    details: Joi.string()
      .min(6)
      .max(4000)
      .required(),

    date: Joi.date()
      .required(),

    image: Joi.string()
      .alphanum()
      .max(255),

    link: Joi.string()
      .alphanum()
      .max(255),

    type: Joi.string()
    .alphanum()
    .max(255)
    .required()

  });
  return schema.validate(data);
};



module.exports.loginValidation = loginValidation;
module.exports.projectValidation = projectValidation;
