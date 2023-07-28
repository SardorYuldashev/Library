const Joi = require('joi');

exports.postLoanSchema = {
  body: Joi.object({
    book: Joi.string().required(),
    borrower: Joi.string().required(),
    due_date: Joi.date().required(),
  }),
};

exports.showLoanSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
};