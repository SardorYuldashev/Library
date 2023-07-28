const { NotFoundError } = require("../../shared/errors");
const Loan = require("./_Loan");

const showLoan = async ({ id }) => {
  const loan = await Loan.findById(id).populate([
    {
      path: "book",
      select: "title",
    },
    {
      path: "borrower",
      select: "full_name",
    },
  ]);

  if (!loan) {
    throw new NotFoundError("Buyurtma topilmadi.");
  };

  return loan;
};

module.exports = showLoan;