const { NotFoundError } = require("../../shared/errors");
const Publisher = require("./_Publisher");

const showPublisher = async ({ id }) => {
  const publisher = await Publisher.findById(id);

  if (!publisher) {
    throw new NotFoundError("Nashriyot topilmadi.");
  };

  return publisher;
};

module.exports = showPublisher;