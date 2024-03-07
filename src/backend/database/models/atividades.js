'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class atividades extends Model {
    static associate(models) {
      atividades.belongsTo(models.projetos, {
        foreignKey: 'id_projeto',
        as: 'projeto'
      });
      atividades.hasMany(models.estimativas, {
        foreignKey: 'id_atividade',
        as: 'estimativas'
      });
    }
  }
  atividades.init({
    id_projeto: DataTypes.INTEGER,
    nome: DataTypes.TEXT,
    descricao: DataTypes.STRING,
    data_inicio_prevista: DataTypes.DATE,
    data_fim_prevista: DataTypes.DATE,
    status: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'atividades',
  });
  return atividades;
};