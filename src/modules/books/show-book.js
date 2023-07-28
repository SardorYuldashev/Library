const { NotFoundError } = require("../../shared/errors");
const Book = require("./_Book");

const showBook = async ({ id }) => {
  const book = await Book.findById(id).populate([
    {
      path: "publisher",
      select: "name",
    },
    {
      path: "author",
      select: "full_name",
    },
  ]);

  if (!book) {
    throw new NotFoundError("Kitob topilmadi.");
  };

  return book;
};

module.exports = showBook;