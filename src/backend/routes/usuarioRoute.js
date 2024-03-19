const UsuarioController = require('../controllers/usuarioController');

module.exports = async function (fastify, options) {
  fastify.post('/', UsuarioController.create);
  fastify.get('/', UsuarioController.getAll);
};
