'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('estimativas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_projeto: {
        type: Sequelize.INTEGER,
        references: {
          model: 'projetos',
          key: 'id',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        }
      },
      id_atividade: {
        type: Sequelize.INTEGER,
        references: {
          model: 'atividades',
          key: 'id',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        }
      },
      tipo_estimativa: {
        type: Sequelize.TEXT
      },
      e_otimista: {
        type: Sequelize.REAL
      },
      e_nominal: {
        type: Sequelize.REAL
      },
      e_pessimista: {
        type: Sequelize.REAL
      },
      mu: {
        type: Sequelize.REAL
      },
      sigma: {
        type: Sequelize.REAL
      },
      data_estimativa: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('estimativas');
  }
};