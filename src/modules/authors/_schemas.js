const Joi = require('joi');

exports.postAuthorSchema = {
  body: Joi.object({
    full_name: Joi.string().required()
  }),
};

exports.showAuthorSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
};

exports.patchAuthorSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
  body: Joi.object({
    full_name: Joi.string()
  }),
};

exports.deleteAuthorSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
};