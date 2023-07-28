const Publisher = require("./_Publisher");

const listPublishers = async () => {

  const result = await Publisher.find()

  return result;
};

module.exports = listPublishers;