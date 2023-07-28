const { ForbiddenError } = require('../../shared/errors');
const Borrower = require('./_Borrower');

const addBorrower = async (data) => {
  if (!data.phone.startsWith("+998")) {
    throw new ForbiddenError(`Telefon raqam +9989 bilan boshlanishi kerak`);
  };

  const result = await Borrower.create(data);

  return result;
};

module.exports = addBorrower;