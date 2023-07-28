const { NotFoundError } = require('../../shared/errors');
const Author = require('./_Author');

const editAuthor = async ({ id, ...changes }) => {
  const existing = await Author.findById(id);

  if (!existing) {
    throw new NotFoundError('Muallif topilmadi.');
  };

  return Author.findByIdAndUpdate(id, changes, { new: true });
};

module.exports = editAuthor;