const AuthController = require('../controllers/authController.js');

module.exports = async function (fastify, options) {
  fastify.post('/', AuthController.login);
};
