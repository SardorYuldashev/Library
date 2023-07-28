const { ForbiddenError } = require('../../shared/errors');
const Loan = require('./_Loan');

const addLoan = async (data, user) => {

  const exist = await Loan.find({ borrower: data.borrower });

  let haveDuty = false;
  let totalBooks = 0;
  const currentDate = new Date();

  exist.forEach(item => {
    if (item.due_date < currentDate) {
      haveDuty = true
    }
    totalBooks++
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