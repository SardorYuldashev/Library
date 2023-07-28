const express = require('express');
const httpValidator = require('../../shared/http-validator');
const addLoan = require('./add-loan');
const listLoans = require('./list-loans');
const showLoan = require('./show-loan');
const { postLoanSchema, showLoanSchema } = require('./_schemas');

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


    const result = await listLoans();

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

module.exports = {
  postLoan,
  getLoans,
  getLoan
};