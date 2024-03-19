const database = require("../database/models");
const bcrypt = require("bcrypt");

module.exports = class AuthService {
  async login(usuario) {
    // busca por e-mail
    const usuarioEncontrado = await database.usuarios.findOne({
      where: {
        email: usuario.email,
      },
    });

    if (!usuarioEncontrado) {
      return null;
    }

    // compara senha
    const senhaCorreta = await bcrypt.compare(
      usuario.senha,
      usuarioEncontrado.senha
    );

    if (!senhaCorreta) {
      return null;
    }

    return usuarioEncontrado;
  }
};
