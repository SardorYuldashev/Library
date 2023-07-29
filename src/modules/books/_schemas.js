const Joi = require('joi');
const { offsetPaginaionSchema, makeSortSchema } = require('../../shared/schemas');

exports.postBookSchema = {
  body: Joi.object({
    title: Joi.string().required(),
    publisher: Joi.string().required(),
    author: Joi.string().required(),
    copies: Joi.number().integer().required(),
  }),
};

exports.getBooksSchema = {
  query: Joi.object({
    q: Joi.string(),
    page: offsetPaginaionSchema,
    sort: makeSortSchema(["copies"]),
    filters: Joi.object({
      is_deleted: Joi.boolean(),
      publisher: Joi.string(),
      author : Joi.string(),
    }),
  }),
};

exports.showBookSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
};

exports.patchBookSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
  body: Joi.object({
    title: Joi.string(),
    publisher: Joi.string(),
    author: Joi.string(),
    copies: Joi.number().integer(),
  }),
};

exports.deleteBookSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
};