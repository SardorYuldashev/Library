const { NotFoundError } = require('../../shared/errors');
const Book = require('./_Book');

const editBook = async ({ id, ...changes }) => {
  const existing = await Book.findById(id);

  if (!existing) {
    throw new NotFoundError('Kitob topilmadi.');
  };

  return Book.findByIdAndUpdate(id, changes, { new: true });
};

module.exports = editBook;