const { NotFoundError } = require('../../shared/errors');
const Loan = require('./_Loan');

const editLoan = async ({ id }) => {
  const existing = await Loan.findById(id);

  if (!existing) {
    throw new NotFoundError('Buyurtma topilmadi.');
  };

  return Loan.findByIdAndUpdate(id, { returned: true }, { new: true });
};

module.exports = editLoan;