const Admin = require("./_Admin");

const listAdmins = async ({ q, page = { limit: 5, offset: 0 }, sort = { by: 'full_name', order: 'asc' }, filters = {} }) => {

  if (q) {
    filters.full_name = { $regex: new RegExp(q, "i") };
  }

  const result = await Admin.find({ ...filters })
    .skip(page.offset)
    .limit(page.limit)
    .sort({ [sort.by]: sort.order });

  return { admins: result, total: result.length, pageInfo: { ...page } };
};

module.exports = listAdmins;