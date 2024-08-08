const TransactionService = require('../services/transactionService');

exports.sendMoney = async (req, reply) => {
  try {
    const transaction = await TransactionService.sendMoney(req.user.id, req.body.amount);
    reply.send(transaction);
  } catch (error) {
    reply.status(500).send(error);
  }
};

exports.withdrawMoney = async (req, reply) => {
  try {
    const transaction = await TransactionService.withdrawMoney(req.user.id, req.body.amount);
    reply.send(transaction);
  } catch (error) {
    reply.status(500).send(error);
  }
};