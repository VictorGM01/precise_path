const database = require("../database/models");

module.exports = class UsuarioService {
  async create(usuario) {
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

      console.log(permissoes);

      await usuarioCriado[0].setPermissoes(permissoes);
    }

    return usuarioCriado;
  }
};
