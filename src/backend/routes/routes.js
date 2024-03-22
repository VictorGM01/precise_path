const usuarioRoutes = require("./usuarioRoute");
const authRoutes = require("./authRoute");
const projetoRoutes = require("./projetoRoute");

async function routes(fastify, options) {
  fastify.register(authRoutes, { prefix: "/auth" });
}

async function routesAuth(fastify, options) {
  fastify.addHook("preHandler", fastify.authenticate);

  fastify.register(usuarioRoutes, { prefix: "/usuarios" });

  fastify.register(projetoRoutes, { prefix: "/projetos" });
}

module.exports = { routes, routesAuth };
