'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class estimativas extends Model {
    static associate(models) {
      estimativas.belongsTo(models.projetos, {
        foreignKey: 'id_projeto',
        as: 'projeto'
      });
      estimativas.belongsTo(models.atividades, {
        foreignKey: 'id_atividade',
        as: 'atividade'
      });
    }
  }
  estimativas.init({
    id_projeto: DataTypes.INTEGER,
    id_atividade: DataTypes.INTEGER,
    tipo_estimativa: DataTypes.TEXT,
    e_otimista: DataTypes.REAL,
    e_nominal: DataTypes.REAL,
    e_pessimista: DataTypes.REAL,
    mu: DataTypes.REAL,
    sigma: DataTypes.REAL,
    data_estimativa: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'estimativas',
  });
  return estimativas;
};