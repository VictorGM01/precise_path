const usuarioRoutes = require('./usuarioRoute');

module.exports = async function routes(fastify, options) {
  fastify.register(usuarioRoutes, { prefix: '/usuarios' });
};