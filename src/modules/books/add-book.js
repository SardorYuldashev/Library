const Book = require('./_Book');

const addBook = async (data) => {
  const result = await Book.create(data);

  return result;
};

module.exports = addBook;