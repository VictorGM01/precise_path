const ProjetoController = require('../controllers/projetoController');

module.exports = async function (fastify, options) {
  fastify.post('/', ProjetoController.create);
};
