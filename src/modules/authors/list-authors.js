const Author = require("./_Author");

const listAuthors = async ({ q, page = { limit: 5, offset: 0 }, sort = { by: 'full_name', order: 'asc' }, filters = {} }) => {

  if (q) {
    filters.full_name = { $regex: new RegExp(q, "i") };
  };

  const total = (await Author.find({ ...filters })).length;

  const result = await Author.find({ ...filters })
    .skip(page.offset)
    .limit(page.limit)
    .sort({ [sort.by]: sort.order });

  return { authors: result, total, pageInfo: { ...page } };
};

module.exports = listAuthors;