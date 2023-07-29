const { ForbiddenError, NotFoundError } = require('../../shared/errors');
const Loan = require('./_Loan');
const Book = require('../books/_Book');
const Borrower = require('../borrowers/_Borrower');

const addLoan = async (data, user) => {

  const bookExist = await Book.findOne({ _id: data.book, is_deleted: false });

  if (!bookExist) {
    throw new NotFoundError("Kitob topilmadi");
  };

  const borrowerExist = await Borrower.findOne({ _id: data.borrower, is_deleted: false });

  if (!borrowerExist) {
    throw new NotFoundError("Kitobxon topilmadi");
  };

  const exist = await Loan.find({ borrower: data.borrower });

  let haveDuty = false;
  let totalBooks = 0;
  const currentDate = new Date();

  exist.forEach(item => {
    if (item.due_date < currentDate && !item.returned) {
      haveDuty = true
    };
    totalBooks++;
  });

  if (haveDuty) {
    throw new ForbiddenError("Avval mudatida qaytarilmagan kitobingizni topshiring");
  };

  if (totalBooks >= 10) {
    throw new ForbiddenError("Bir kishi maksimum 10 ta kitob olishi mumkin");
  };

  if (currentDate > new Date(data.due_date)) {
    throw new ForbiddenError("Orqa sana bilan kitob olib bo'lmaydi");
  };

  currentDate.setDate(currentDate.getDate() + 61);

  if (currentDate < new Date(data.due_date)) {
    throw new ForbiddenError("Kitob 2 oydan ortiq muddatga berilmaydi");
  };

  const result = await Loan.create({ ...data, admin: user.id });

  return result;
};

module.exports = addLoan;