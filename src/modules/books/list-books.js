const Book = require("./_Book");

const listBooks = async ({ q, page = { limit: 5, offset: 0 }, sort = { by: 'copies', order: 'desc' }, filters = {} }) => {

  if (q) {
    filters.title = { $regex: new RegExp(q, "i") };
  };

  const total = (await Book.find({ ...filters })).length;

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

  return { books: result, total, pageInfo: { ...page } };
};

module.exports = listBooks;