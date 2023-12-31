const Loan = require("./_Loan");

const listLoans = async ({ page = { limit: 5, offset: 0 }, sort = { by: 'out_date', order: 'asc' }, filters = {} }) => {

  const total = (await Loan.find({ ...filters })).length;

  const result = await Loan.find({ ...filters })
    .populate([
      {
        path: "book",
        select: "title",
      },
      {
        path: "borrower",
        select: "full_name",
      },
    ])
    .skip(page.offset)
    .limit(page.limit)
    .sort({ [sort.by]: sort.order });

  return { loans: result, total, pageInfo: { ...page } };
};

module.exports = listLoans;