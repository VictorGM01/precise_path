const ProjetoService = require("../services/projetoService.js");
const Joi = require("joi");

const projetoService = new ProjetoService();

module.exports = class ProjetoController {
  static async create(request, reply) {
    try {
      const projeto = request.body;

      const id_usuario = request.user.id;

      const schema = Joi.object({
        nome: Joi.string().required(),
        data_inicio: Joi.date().required(),
        data_fim: Joi.date().required(),
        ativo: Joi.boolean().required(),
        status: Joi.string()
          .case("upper")
          .valid("EM ANDAMENTO", "CONCLUÍDO", "CANCELADO")
          .required(),
      });

      const { value, error } = schema.validate(projeto);

      if (error) {
        reply.status(400).send({ message: error.message });
        return;
      }

      value.id_usuario = id_usuario;

      const projetoCriado = await projetoService.create(value);

      reply.status(201).send(projetoCriado);
    } catch (error) {
      reply.status(500).send({ message: error.message });
    }
  }

  static async getAllByUser(request, reply) {
    try {
      const id_usuario = request.user.id;

      const projetos = await projetoService.getAllByUser(id_usuario);

      reply.send(projetos);
    } catch (error) {
      reply.status(500).send({ message: error.message });
    }
  }

  static async getAll(request, reply) {
    try {
      const id_administrador = request.user.id;

      const projetos = await projetoService.getAll(id_administrador);
      return projetos;
    } catch (error) {
      if (error.message === "Permissão negada!") {
        reply.status(403).send({ message: error.message });
      } else {
        reply.status(500).send({ message: error.message });
      }
    }
  }

  static async getById(request, reply) {
    try {
      const id_projeto = request.params.id;
      const id_usuario = request.user.id;

      const projeto = await projetoService.getById({ id_projeto, id_usuario });

      reply.send(projeto);
    } catch (error) {
      if (error.message === "Projeto não encontrado!") {
        reply.status(404).send({ message: error.message });
      } else {
        reply.status(500).send({ message: error.message });
      }
    }
  }
};
