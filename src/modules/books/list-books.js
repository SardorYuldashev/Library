const Book = require("./_Book");

const listBooks = async () => {

  const result = await Book
    .find()
    .populate([
      {
        path: "publisher",
        select: "name",
      },
      {
        path: "author",
        select: "full_name",
      },
    ]);

  return result;
};

module.exports = listBooks;