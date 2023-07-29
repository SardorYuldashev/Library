const express = require('express');
const httpValidator = require('../../shared/http-validator');
const addBook = require('./add-book');
const listBooks = require('./list-books');
const showBook = require('./show-book');
const editBook = require('./edit-book');
const removeBook = require('./remove-book');
const { postBookSchema,
  showBookSchema,
  patchBookSchema,
  deleteBookSchema,
  getBooksSchema } = require('./_schemas');

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const postBook = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postBookSchema);

    const result = await addBook(req.body);

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
const getBooks = async (req, res, next) => {
  try {
    httpValidator({ query: req.query }, getBooksSchema);

    const result = await listBooks({ ...req.query });

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
const getBook = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, showBookSchema)

    const result = await showBook(req.params);

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
const patchBook = async (req, res, next) => {
  try {
    httpValidator({ body: req.body, params: req.params }, patchBookSchema);

    const result = await editBook({ ...req.params, ...req.body });

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
const deleteBook = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, deleteBookSchema)

    const result = await removeBook(req.params);

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  };
};

module.exports = {
  postBook,
  getBooks,
  getBook,
  patchBook,
  deleteBook
};