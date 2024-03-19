const usuarioRoutes = require('./usuarioRoute');
const authRoutes = require('./authRoute');

module.exports = async function routes(fastify, options) {
  fastify.register(usuarioRoutes, { prefix: '/usuarios' });
  fastify.register(authRoutes, { prefix: '/auth' });
};