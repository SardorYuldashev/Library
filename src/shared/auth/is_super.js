const express = require('express');
const { ForbiddenError } = require("../errors");

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const isSuper = (req, res, next) => {
  if (!req.user.is_super) {
    throw new ForbiddenError(`Bu yo'l faqat super_admin uchun`);
  };

  next();
};

module.exports = isSuper;