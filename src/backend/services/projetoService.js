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
      throw new Error("Permissão negada!");
    }

    const projetos = await database.projetos.findAll();

    return projetos;
  }

  async getById(dto) {
    const projeto = await database.projetos.findByPk(dto.id_projeto, {
      where: {
        id_usuario: dto.id_usuario,
      },
    });

    if (!projeto) {
      const permissaoAdm = await database.permissoes.findOne({
        where: {
          nome: "ADMIN",
        },
        include: [
          {
            model: database.usuarios,
            as: "usuarios",
            through: { attributes: [] },
            where: {
              id: dto.id_usuario,
            },
          },
        ],
      });

      const projetoAdm = await database.projetos.findByPk(dto.id_projeto);

      if (!projetoAdm || !permissaoAdm) {
        throw new Error("Projeto não encontrado!");
      }
    }

    return projeto;
  }

  async update(dto) {
    const usuario = await database.usuarios.findByPk(dto.id_usuario, {
      include: {
        model: database.permissoes,
        as: "permissoes",
        through: { attributes: [] },
        attributes: ["nome"],
      },
      attributes: ["id"],
    });

    let projetoAtual;

    if (usuario.permissoes.some((permissao) => permissao.nome === "ADMIN")) {
      projetoAtual = await database.projetos.findByPk(dto.id_projeto);
    } else {
      projetoAtual = await database.projetos.findOne({
        where: {
          id: dto.id_projeto,
          id_usuario: dto.id_usuario,
        },
      });
    }

    if (!projetoAtual) {
      return;
    }

    const projetoAtualizado = await projetoAtual.update(dto.projeto);

    return projetoAtualizado;
  }

  async delete(dto) {
    const usuario = await database.usuarios.findByPk(dto.id_usuario, {
      include: {
        model: database.permissoes,
        as: "permissoes",
        through: { attributes: [] },
        attributes: ["nome"],
      },
      attributes: ["id"],
    });

    let projetoAtual;

    if (usuario.permissoes.some((permissao) => permissao.nome === "ADMIN")) {
      projetoAtual = await database.projetos.findByPk(dto.id_projeto);
    } else {
      projetoAtual = await database.projetos.findOne({
        where: {
          id: dto.id_projeto,
          id_usuario: dto.id_usuario,
        },
      });
    }

    if (!projetoAtual) {
      return;
    }

    await projetoAtual.destroy();
  }
};
