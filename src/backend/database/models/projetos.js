'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class projetos extends Model {
    static associate(models) {
      projetos.belongsTo(models.usuarios, {
        foreignKey: 'id_usuario',
        as: 'usuario'
      });
      projetos.hasMany(models.atividades, {
        foreignKey: 'id_projeto',
        as: 'atividades'
      });
      projetos.hasMany(models.estimativas, {
        foreignKey: 'id_projeto',
        as: 'estimativas'
      });
    }
  }
  projetos.init({
    id_usuario: DataTypes.INTEGER,
    nome: DataTypes.TEXT,
    data_inicio: DataTypes.DATE,
    data_fim: DataTypes.DATE,
    ativo: DataTypes.BOOLEAN,
    status: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'projetos',
    paranoid: true
  });
  return projetos;
};