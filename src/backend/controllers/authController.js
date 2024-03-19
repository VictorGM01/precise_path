const AuthService = require("../services/authService.js");
const Joi = require("joi");

const authService = new AuthService();

module.exports = class AuthController {
  static async login(request, reply) {
    try {
      const usuario = request.body;

      const schema = Joi.object({
        email: Joi.string().email().required(),
        senha: Joi.string().required(),
      });

      const { value, error } = schema.validate(usuario);

      if (error) {
        reply.status(400).send({ message: error.message });
        return;
      }

      const loginInfo = await authService.login(value);

      if (!loginInfo) {
        reply.status(401).send({ message: "Usuário ou senha inválidos" });
        return;
      }

      reply.status(201).send(loginInfo);
    } catch (error) {
      reply.status(500).send({ message: error.message });
    }
  }
};
