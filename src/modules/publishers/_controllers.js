const express = require('express');
const httpValidator = require('../../shared/http-validator');
const addPublisher = require('./add-publisher');
const listPublishers = require('./list-publishers');
const showPublisher = require('./show-publisher');
const editPublisher = require('./edit-publisher');
const removePublisher = require('./remove-publisher');
const {
  postPublisherSchema,
  showPublisherSchema,
  patchPublisherSchema,
  deletePublisherSchema } = require('./_schemas');

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const postPublisher = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postPublisherSchema);

    const result = await addPublisher(req.body);

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
const getPublishers = async (req, res, next) => {
  try {


    const result = await listPublishers();

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
const getPublisher = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, showPublisherSchema)

    const result = await showPublisher(req.params);

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
const patchPublisher = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, patchPublisherSchema);

    const result = await editPublisher({ ...req.params, ...req.body });

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
const deletePublisher = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, deletePublisherSchema)

    const result = await removePublisher(req.params);

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  };
};

module.exports = {
  postPublisher,
  getPublishers,
  getPublisher,
  patchPublisher,
  deletePublisher
};