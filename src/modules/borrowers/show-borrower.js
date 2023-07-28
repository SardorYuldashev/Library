const { NotFoundError } = require("../../shared/errors");
const Borrower = require("./_Borrower");

const showBorrower = async ({ id }) => {
  const borrower = await Borrower.findById(id);

  if (!borrower) {
    throw new NotFoundError("Kitobxon topilmadi.");
  };

  return borrower;
};

module.exports = showBorrower;