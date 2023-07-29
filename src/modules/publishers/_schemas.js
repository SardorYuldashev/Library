const Joi = require('joi');
const { offsetPaginaionSchema, makeSortSchema } = require('../../shared/schemas');

exports.postPublisherSchema = {
  body: Joi.object({
    name: Joi.string().required(),
    address: Joi.string().required(),
    phone: Joi.string().required().length(13),
  }),
};

exports.getPublishersSchema = {
  query: Joi.object({
    q: Joi.string(),
    page: offsetPaginaionSchema,
    sort: makeSortSchema(["name"]),
    filters: Joi.object({
      is_deleted: Joi.boolean(),
    }),
  }),
};

exports.showPublisherSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
};

exports.patchPublisherSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
  body: Joi.object({
    name: Joi.string(),
    address: Joi.string(),
    phone: Joi.string(),
  }),
};

exports.deletePublisherSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
};