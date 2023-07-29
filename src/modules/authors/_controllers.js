const express = require('express');
const httpValidator = require('../../shared/http-validator');
const addAuthor = require('./add-author');
const listAuthors = require('./list-authors');
const showAuthor = require('./show-author');
const editAuthor = require('./edit-author');
const removeAuthor = require('./remove-author');
const {
  postAuthorSchema,
  getAuthorsSchema,
  showAuthorSchema,
  patchAuthorSchema,
  deleteAuthorSchema } = require('./_schemas');

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const postAuthor = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postAuthorSchema);

    const result = await addAuthor(req.body);

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
const getAuthors = async (req, res, next) => {
  try {
    httpValidator({ query: req.query }, getAuthorsSchema);

    const result = await listAuthors({ ...req.query });

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
const getAuthor = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, showAuthorSchema)

    const result = await showAuthor(req.params);

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
const patchAuthor = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, patchAuthorSchema);

    const result = await editAuthor({ ...req.params, ...req.body });

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
const deleteAuthor = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, deleteAuthorSchema)

    const result = await removeAuthor(req.params);

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  };
};

module.exports = {
  postAuthor,
  getAuthors,
  getAuthor,
  patchAuthor,
  deleteAuthor
};