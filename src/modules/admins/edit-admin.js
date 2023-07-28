const { NotFoundError } = require('../../shared/errors');
const Admin = require('./_Admin');
const bcrypt = require('bcryptjs')

const editAdmin = async ({ id, ...changes }) => {
  const existing = await Admin.findById(id);

  if (!existing) {
    throw new NotFoundError('Foydalanuvchi topilmadi.');
  }

  let changeValues = {};

  if (changes.password) {
    changeValues.password = await bcrypt.hash(changes.password, 10);
  };

  return Admin.findByIdAndUpdate(id, { ...changes, ...changeValues }, { new: true });
};

module.exports = editAdmin;