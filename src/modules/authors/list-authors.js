const Author = require("./_Author");

const listAuthors = async () => {

  const result = await Author.find()

  return result;
};

module.exports = listAuthors;