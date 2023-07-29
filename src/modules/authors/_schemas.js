const Joi = require('joi');
const { offsetPaginaionSchema, makeSortSchema } = require('../../shared/schemas');

exports.postAuthorSchema = {
  body: Joi.object({
    full_name: Joi.string().required()
  }),
};

exports.getAuthorsSchema = {
  query: Joi.object({
    q: Joi.string(),
    page: offsetPaginaionSchema,
    sort: makeSortSchema(["full_name"]),
    filters: Joi.object({
      is_deleted: Joi.boolean(),
    }),
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