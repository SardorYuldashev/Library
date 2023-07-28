const { ForbiddenError } = require('../../shared/errors');
const Publisher = require('./_Publisher');

const addPublisher = async (data) => {
  if (!data.phone.startsWith("+998")) {
    throw new ForbiddenError(`Telefon raqam +9989 bilan boshlanishi kerak`);
  };

  const result = await Publisher.create(data);

  return result;
};

module.exports = addPublisher;