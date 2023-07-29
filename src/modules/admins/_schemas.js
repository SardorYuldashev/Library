const Joi = require('joi');
const { offsetPaginaionSchema, makeSortSchema } = require('../../shared/schemas');

exports.postRegisterAdminSchema = {
  body: Joi.object({
    full_name: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

exports.getAdminsSchema = {
  query: Joi.object({
    q: Joi.string(),
    page: offsetPaginaionSchema,
    sort: makeSortSchema(["full_name", "username"]),
    filters: Joi.object({
      is_deleted: Joi.boolean(),
      is_super: Joi.boolean(),
    }),
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
