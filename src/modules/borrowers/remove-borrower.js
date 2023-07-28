const { NotFoundError } = require('../../shared/errors');
const Borrower = require('./_Borrower');

const removeBorrower = async ({ id }) => {
  const existing = await Borrower.findById(id);

  if (!existing) {
    throw new NotFoundError('Kitobxon topilmadi.');
  };

  return Borrower.findByIdAndUpdate(id, { is_deleted: true }, { new: true });
};

module.exports = removeBorrower;