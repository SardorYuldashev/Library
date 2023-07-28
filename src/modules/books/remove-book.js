const { NotFoundError } = require('../../shared/errors');
const Book = require('./_Book');

const removeBook = async ({ id }) => {
  const existing = await Book.findById(id);

  if (!existing) {
    throw new NotFoundError('Kitob topilmadi.');
  };

  return Book.findByIdAndUpdate(id, { is_deleted: true }, { new: true });
};

module.exports = removeBook;