const Joi = require('joi');
const { offsetPaginaionSchema, makeSortSchema } = require('../../shared/schemas');

exports.postLoanSchema = {
  body: Joi.object({
    book: Joi.string().required(),
    borrower: Joi.string().required(),
    due_date: Joi.date().required(),
  }),
};

exports.getLoansSchema = {
  query: Joi.object({
    page: offsetPaginaionSchema,
    sort: makeSortSchema(["out_date", "due_date"]),
    filters: Joi.object({
      admin: Joi.string(),
      book: Joi.string(),
      borrower: Joi.string(),
    }),
  }),
};

exports.showLoanSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
};

exports.editLoanSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
};