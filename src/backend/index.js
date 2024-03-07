const Fastify = require("fastify");
const database = require("./database/models");

const fastify = Fastify({
  logger: true,
});

// testa a conexão com o banco
fastify.get("/", async function (request, reply) {
  try {
    await database.sequelize.authenticate();
    reply.send({ status: "ok" });
  } catch (error) {
    reply.send({ status: "error" });
  }
});

fastify.listen({ port: 3000, host: "0.0.0.0" }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
