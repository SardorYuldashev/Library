const Joi = require('joi');

exports.postRegisterAdminSchema = {
  body: Joi.object({
    full_name: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

exports.postLoginAdminSchema = {
  body: Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

exports.patchAdminSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
  body: Joi.object({
    full_name: Joi.string(),
    username: Joi.string(),
    password: Joi.string()
  }),
};

exports.showAdminSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
};

exports.deleteAdminSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
};
