const Account = require('../models/accountModel');
const Transaction = require('../models/transactionModel');

exports.sendMoney = async (userId, amount) => {
  const account = await Account.findOne({ userId });
  if (!account) throw new Error('Account not found');

  const transaction = new Transaction({ accountId: account._id, amount, type: 'send' });
  await transaction.save();

  account.balance += amount;
  account.transactions.push(transaction._id);
  await account.save();

  return transaction;
};

exports.withdrawMoney = async (userId, amount) => {
  const account = await Account.findOne({ userId });
  if (!account) throw new Error('Account not found');
  if (account.balance < amount) throw new Error('Insufficient funds');

  const transaction = new Transaction({ accountId: account._id, amount, type: 'withdraw' });
  await transaction.save();

  account.balance -= amount;
  account.transactions.push(transaction._id);
  await account.save();

  return transaction;
};
