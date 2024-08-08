
const AccountService = require('../services/accountService');

exports.getAccounts = async (req, reply) => {
  try {
    const accounts = await AccountService.getAccounts(req.user.id);
    reply.send(accounts);
  } catch (error) {
    reply.status(500).send(error);
  }
};
