"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("permissoes", [
      {
        nome: "ADMIN",
        ativo: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "USER",
        ativo: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("permissoes", null, {});
  },
};
