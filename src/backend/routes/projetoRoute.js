const ProjetoController = require("../controllers/projetoController");

module.exports = async function (fastify, options) {
  fastify.post("/", ProjetoController.create);
  fastify.get("/", ProjetoController.getAllByUser);
  fastify.get("/all", ProjetoController.getAll);
  fastify.get("/:id", ProjetoController.getById);
  fastify.put("/:id", ProjetoController.update);
};
