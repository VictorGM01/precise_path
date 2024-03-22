const database = require("../database/models");

module.exports = class ProjetoService {
  async create(projeto) {
    const projetoCriado = await database.projetos.findOrCreate({
      where: {
        nome: projeto.nome,
        id_usuario: projeto.id_usuario,
      },
      defaults: {
        nome: projeto.nome,
        data_inicio: projeto.data_inicio,
        data_fim: projeto.data_fim,
        ativo: projeto.ativo,
        status: projeto.status,
        id_usuario: projeto.id_usuario,
      },
    });

    if (!projetoCriado[1]) {
      throw new Error(
        `Já existe um projeto com o nome ${projeto.nome} cadastrado para este usuário!`
      );
    }

    return projetoCriado;
  }

  async getAllByUser(id_usuario) {
    const projetos = await database.projetos.findAll({
      where: {
        id_usuario,
      },
    });

    return projetos;
  }

  async getAll(id_administrador) {
    const user = await database.usuarios.findByPk(id_administrador, {
      include: {
        model: database.permissoes,
        as: "permissoes",
        through: { attributes: [] },
        attributes: ["nome"],
      },
      attributes: ["id"],
    });

    if (!user.permissoes.some((permissao) => permissao.nome === "ADMIN")) {
      throw new Error(
        "Permissão negada!"
      );
    }

    const projetos = await database.projetos.findAll();

    return projetos;
  }
};
