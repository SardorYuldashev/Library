const Joi = require('joi');
const { offsetPaginaionSchema, makeSortSchema } = require('../../shared/schemas');

exports.postBorrowerSchema = {
  body: Joi.object({
    full_name: Joi.string().required(),
    address: Joi.string().required(),
    phone: Joi.string().required().length(13),
  }),
};

exports.getBorrowersSchema = {
  query: Joi.object({
    q: Joi.string(),
    page: offsetPaginaionSchema,
    sort: makeSortSchema(["full_name", "phone"]),
    filters: Joi.object({
      is_deleted: Joi.boolean(),
      is_super: Joi.boolean(),
    }),
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