const database = require("../database/models");
const bcrypt = require('bcrypt');


module.exports = class UsuarioService {
  async create(usuario) {

    usuario.senha = await bcrypt.hash(usuario.senha, 10);

    const usuarioCriado = await database.usuarios.findOrCreate({
      where: {
        email: usuario.email,
      },
      defaults: {
        nome: usuario.nome,
        senha: usuario.senha,
        imagem_perfil: usuario.imagem_perfil,
        cargo: usuario.cargo,
        celular: usuario.celular,
        ativo: usuario.ativo,
      },
    });

    if (usuario.permissoes && usuarioCriado[1]) {
      const permissoes = await database.permissoes.findAll({
        where: {
          nome: usuario.permissoes,
        },
      });

      await usuarioCriado[0].setPermissoes(permissoes);
    }

    return usuarioCriado;
  }

  async getAll() {
    return await database.usuarios.findAll({
      include: {
        model: database.permissoes,
        as: "permissoes",
        through: { attributes: [] },
      },
      attributes: { exclude: ["senha", "createdAt", "updatedAt"] },
      order: [["id", "ASC"]],
    });
  }
};
