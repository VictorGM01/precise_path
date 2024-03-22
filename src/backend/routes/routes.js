const usuarioRoutes = require("./usuarioRoute");
const authRoutes = require("./authRoute");

async function routes(fastify, options) {
  fastify.register(authRoutes, { prefix: "/auth" });
}

async function routesAuth(fastify, options) {
  fastify.addHook("preHandler", fastify.authenticate);

  fastify.register(usuarioRoutes, { prefix: "/usuarios" });
}

module.exports = { routes, routesAuth };
