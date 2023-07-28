const Borrower = require("./_Borrower");

const listBorrowers = async () => {

  const result = await Borrower.find()

  return result;
};

module.exports = listBorrowers;