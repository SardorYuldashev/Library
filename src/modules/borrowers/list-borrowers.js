const Borrower = require("./_Borrower");

const listBorrowers = async ({ q, page = { limit: 5, offset: 0 }, sort = { by: 'full_name', order: 'asc' }, filters = {} }) => {

  if (q) {
    filters.full_name = { $regex: new RegExp(q, "i") };
  };

  const total = (await Borrower.find({ ...filters })).length;

  const result = await Borrower.find({ ...filters })
    .skip(page.offset)
    .limit(page.limit)
    .sort({ [sort.by]: sort.order });

  return { borrowers: result, total, pageInfo: { ...page } };
};

module.exports = listBorrowers;