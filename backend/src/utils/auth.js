const jwt = require('jsonwebtoken');

module.exports = async (req, reply) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;  // Data pengguna yang valid dimasukkan ke req.user
  } catch (error) {
    reply.status(401).send({ message: 'Unauthorized' });
  }
};