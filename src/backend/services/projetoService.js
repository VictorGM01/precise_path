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
};
