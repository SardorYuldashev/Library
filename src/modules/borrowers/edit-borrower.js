const { NotFoundError, ForbiddenError } = require('../../shared/errors');
const Borrower = require('./_Borrower');

const editBorrower = async ({ id, ...changes }) => {
  const existing = await Borrower.findById(id);

  if (!existing) {
    throw new NotFoundError('Kitobxon topilmadi.');
  };

  if (changes.phone && !changes.phone.startsWith("+998")) {
    throw new ForbiddenError(`Telefon raqam +9989 bilan boshlanishi kerak`);
  };

  return Borrower.findByIdAndUpdate(id, changes, { new: true });
};

module.exports = editBorrower;