const axios = require("axios");
const baseURL = "http://localhost:3000";
const Joi = require("joi");

describe("Testes de ponta-a-ponta das rotas de Projetos", () => {
  let token; // Para armazenar o token de autenticação

  // schema para validar o retorno de um projeto
  const projetoSchema = Joi.object({
    id: Joi.number().required(),
    id_usuario: Joi.number().required(),
    nome: Joi.string().required(),
    data_inicio: Joi.date().required(),
    data_fim: Joi.date().required(),
    ativo: Joi.boolean().required(),
    status: Joi.string()
      .valid("EM ANDAMENTO", "CONCLUÍDO", "CANCELADO")
      .required(),
    createdAt: Joi.date(),
    updatedAt: Joi.date(),
    deletedAt: Joi.date().allow(null),
  });

  // Autentica o usuário antes de todos os testes
  beforeAll(async () => {
    const response = await axios.post(`${baseURL}/auth`, {
      email: "victorteste@gmail.com",
      senha: "123456",
    });
    token = response.data.token;
  });

  it("Deve retornar um array com todos projetos do usuário", async () => {
    const response = await axios.get(`${baseURL}/projetos`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    // precisa ser um array de objetos
    expect(response.data).toBeInstanceOf(Array);

    // precisa ter pelo menos um projeto
    expect(response.data.length).toBeGreaterThan(0);

    // todos os objetos precisam ter os atributos esperados
    // ou seja, todos os objetos precisam passar no teste do Joi
    response.data.forEach((projeto) => {
      const { error } = projetoSchema.validate(projeto);
      expect(error).toBeUndefined();
    });
  });

  it("Deve retornar um projeto específico", async () => {
    const response = await axios.get(`${baseURL}/projetos/1`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    // precisa ser um objeto
    expect(response.data).toBeInstanceOf(Object);

    // precisa ter os atributos esperados
    const { error } = projetoSchema.validate(response.data);
    expect(error).toBeUndefined();
  });

  it("Deve retornar todos os projetos do sistema se o usuário tiver permissão", async () => {
    try {
      const response = await axios.get(`${baseURL}/projetos/all`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      // precisa ser um array de objetos
      expect(response.data).toBeInstanceOf(Array);

      // todos os objetos precisam ter os atributos esperados
      response.data.forEach((projeto) => {
        const { error } = projetoSchema.validate(projeto);
        expect(error).toBeUndefined();
      });
    } catch (error) {
      // precisa retornar um erro 403 se o usuário não for ADMIN
      expect(error.response.status).toBe(403);
    }
  });
});
