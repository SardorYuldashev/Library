const { compare } = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UnauthorizedError } = require('../../shared/errors');
const config = require('../../shared/config');
const Admin = require('./_Admin');

const loginAdmin = async ({ username, password }) => {
  const existing = await Admin.findOne({ username });

  if (!existing) {
    throw new UnauthorizedError('Username yoki password xato');
  };

  if (existing.is_deleted) {
    throw new UnauthorizedError("Profil o'chirib tashlangan");
  };

  const match = await compare(password, existing.password);

  if (!match) {
    throw new UnauthorizedError('Username yoki password xato');
  };

  const token = jwt.sign(
    { user: { id: existing._id, is_super: existing.is_super } },
    config.jwt.secret,
    { expiresIn: '24h' }
  );

  return token;
};

module.exports = loginAdmin;