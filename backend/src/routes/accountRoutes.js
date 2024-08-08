const auth = require('../utils/auth');
const accountController = require('../controllers/accountController');

module.exports = (fastify, opts, done) => {
  fastify.get('/accounts', { preHandler: [auth] }, accountController.getAccounts);
  done();
};
