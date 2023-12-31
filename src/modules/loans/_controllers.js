const express = require('express');
const httpValidator = require('../../shared/http-validator');
const addLoan = require('./add-loan');
const listLoans = require('./list-loans');
const showLoan = require('./show-loan');
const { postLoanSchema, getLoansSchema, showLoanSchema, editLoanSchema } = require('./_schemas');
const editLoan = require('./edit-loan');

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const postLoan = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postLoanSchema);

    const result = await addLoan(req.body, req.user);

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  };
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const getLoans = async (req, res, next) => {
  try {
    httpValidator({ query: req.query }, getLoansSchema);


    const result = await listLoans({ ...req.query });

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  };
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const getLoan = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, showLoanSchema)

    const result = await showLoan(req.params);

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  };
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const patchLoan = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, editLoanSchema);

    const result = await editLoan(req.params);

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  };
};

module.exports = {
  postLoan,
  getLoans,
  getLoan,
  patchLoan
};