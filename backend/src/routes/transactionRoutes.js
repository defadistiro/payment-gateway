const auth = require('../utils/auth');
const transactionController = require('../controllers/transactionController');

module.exports = (fastify, opts, done) => {
  fastify.post('/send', { preHandler: [auth] }, transactionController.sendMoney);
  fastify.post('/withdraw', { preHandler: [auth] }, transactionController.withdrawMoney);
  done();
};
