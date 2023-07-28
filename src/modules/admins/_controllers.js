const express = require('express');
const httpValidator = require('../../shared/http-validator');
const addAdmin = require('./add-admin');
const loginAdmin = require('./login-admin');
const listAdmins = require('./list-admins');
const showAdmin = require('./show-admin');
const editAdmin = require('./edit-admin');
const removeAdmin = require('./remove-admin');

const {
  postRegisterAdminSchema,
  postLoginAdminSchema,
  showAdminSchema,
  patchAdminSchema,
  deleteAdminSchema
} = require('./_schemas');


/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const postRegisterAdmin = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postRegisterAdminSchema);

    const result = await addAdmin(req.body);

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
const postLoginAdmin = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postLoginAdminSchema);

    const result = await loginAdmin(req.body);

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
const getAdmins = async (req, res, next) => {
  try {


    const result = await listAdmins();

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
const getAdmin = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, showAdminSchema);

    const result = await showAdmin(req.params);

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
const patchMe = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, patchAdminSchema);

    const result = await editAdmin({ id: req.user.id, ...req.body });

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
const patchAdmin = async (req, res, next) => {
  try {
    httpValidator({ params: req.params, body: req.body }, patchAdminSchema);

    const result = await editAdmin({ id: req.params.id, ...req.body });

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
const deleteAdmin = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, deleteAdminSchema);

    const result = await removeAdmin(req.params, req.user);

    res.status(200).json({
      DELETED: result,
    });
  } catch (error) {
    next(error);
  };
};

module.exports = {
  postRegisterAdmin,
  postLoginAdmin,
  getAdmins,
  getAdmin,
  patchMe,
  patchAdmin,
  deleteAdmin
};