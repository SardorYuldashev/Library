const Publisher = require("./_Publisher");

const listPublishers = async ({ q, page = { limit: 5, offset: 0 }, sort = { by: 'name', order: 'asc' }, filters = {} }) => {

  if (q) {
    filters.name = { $regex: new RegExp(q, "i") };
  };

  const result = await Publisher.find({ ...filters })
    .skip(page.offset)
    .limit(page.limit)
    .sort({ [sort.by]: sort.order });

  return { publishers: result, total: result.length, pageInfo: { ...page } };
};

module.exports = listPublishers;