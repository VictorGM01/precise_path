const fastify = require("fastify")({ logger: true });
const routes = require("./routes/routes.js");
const fjwt = require("@fastify/jwt");

fastify.addHook("preHandler", (request, reply, done) => {
  request.jwt = fastify.jwt;
  done();
});

fastify.addHook("onRequest", (request, reply, done) => {
  if (request.method === "POST" && !request.headers["content-type"]) {
    request.headers["content-type"] = "application/json";
  }
  done();
});

fastify.register(fjwt, {
  secret: process.env.JWT_SECRET,
});

fastify.register(routes);

fastify.get("/", async (request, reply) => {
  return { message: "API Precise Path. Seja bem-vindo!" };
});

fastify.listen({ port: 3000, host: "0.0.0.0" }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
