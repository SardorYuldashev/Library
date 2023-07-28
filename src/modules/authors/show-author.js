const { NotFoundError } = require("../../shared/errors");
const Author = require("./_Author");

const showAuthor = async ({ id }) => {
  const author = await Author.findById(id);

  if (!author) {
    throw new NotFoundError("Muallif topilmadi.");
  };

  return author;
};

module.exports = showAuthor;