const { NotFoundError, ForbiddenError } = require('../../shared/errors');
const Admin = require('./_Admin');

const removeAdmin = async ({ id }, user) => {
  if (id === user.id) {
    throw new ForbiddenError("super_admin o'zini o'chira olmaydi");
  };

  const existing = await Admin.findById(id);

  if (!existing) {
    throw new NotFoundError('Admin topilmadi.');
  };

  return Admin.findByIdAndUpdate(id, { is_deleted: true }, { new: true });
};

module.exports = removeAdmin;