'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('atividades', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_projeto: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'projetos',
          key: 'id',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        }
      },
      nome: {
        type: Sequelize.TEXT
      },
      descricao: {
        type: Sequelize.STRING
      },
      data_inicio_prevista: {
        type: Sequelize.DATE
      },
      data_fim_prevista: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('atividades');
  }
};