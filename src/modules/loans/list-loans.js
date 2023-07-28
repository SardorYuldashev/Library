const Loan = require("./_Loan");

const listLoans = async () => {

  const result = await Loan.find().populate([
    {
      path: "book",
      select: "title",
    },
    {
      path: "borrower",
      select: "full_name",
    },
  ]);

  return result;
};

module.exports = listLoans;