const Book = require("./_Book");

const listBooks = async ({ q, page = { limit: 10, offset: 0 }, sort = { by: 'copies', order: 'desc' }, filters }) => {

  if (q) {
    filters.title = { $regex: new RegExp(q, "i") };
  }

  const result = await Book.find({ ...filters })
    .populate([
      {
        path: "publisher",
        select: "name",
      },
      {
        path: "author",
        select: "full_name",
      },
    ])
    .skip(page.offset)
    .limit(page.limit)
    .sort({ [sort.by]: sort.order });

  return { books: result, total: result.length, pageInfo: { ...page } };
};

module.exports = listBooks;