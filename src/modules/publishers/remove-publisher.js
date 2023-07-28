const { NotFoundError } = require('../../shared/errors');
const Publisher = require('./_Publisher');

const removePublisher = async ({ id }) => {
  const existing = await Publisher.findById(id);

  if (!existing) {
    throw new NotFoundError('Nashriyot topilmadi.');
  };

  return Publisher.findByIdAndUpdate(id, { is_deleted: true }, { new: true });
};

module.exports = removePublisher;