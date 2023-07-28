const Admin = require("./_Admin");

const listAdmins = async () => {
  const admins = await Admin.find().select("-password");

  return admins;
};

module.exports = listAdmins;