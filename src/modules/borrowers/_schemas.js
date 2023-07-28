const Joi = require('joi');

exports.postBorrowerSchema = {
  body: Joi.object({
    full_name: Joi.string().required(),
    address: Joi.string().required(),
    phone: Joi.string().required().length(13),
  }),
};

exports.showBorrowerSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
};

exports.patchBorrowerSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
  body: Joi.object({
    full_name: Joi.string(),
    address: Joi.string(),
    phone: Joi.string(),
  }),
};

exports.deleteBorrowerSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
};