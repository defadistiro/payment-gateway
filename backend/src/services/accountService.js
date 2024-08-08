const Account = require('../models/accountModel');

exports.getAccounts = async (userId) => {
  return await Account.find({ userId });
};
