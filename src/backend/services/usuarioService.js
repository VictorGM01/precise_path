const database = require("../database/models");

module.exports = class UsuarioService {
    async create(usuario) {
        const usuarioCriado = await database.usuarios.create(usuario);

        return usuarioCriado;
    }
};
