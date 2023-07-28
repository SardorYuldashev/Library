const { NotFoundError, ForbiddenError } = require('../../shared/errors');
const Publisher = require('./_Publisher');

const editPublisher = async ({ id, ...changes }) => {
  const existing = await Publisher.findById(id);

  if (!existing) {
    throw new NotFoundError('Nashriyot topilmadi.');
  };

  if (changes.phone && !changes.phone.startsWith("+998")) {
    throw new ForbiddenError(`Telefon raqam +9989 bilan boshlanishi kerak`);
  };

  return Publisher.findByIdAndUpdate(id, changes, { new: true });
};

module.exports = editPublisher;