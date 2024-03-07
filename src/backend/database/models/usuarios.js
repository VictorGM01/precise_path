'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuarios extends Model {
    static associate(models) {
      usuarios.belongsToMany(models.permissoes, {
        through: 'permissoes_usuarios',
        foreignKey: 'id_usuario',
        as: 'permissoes'
      });
    }
  }
  usuarios.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    imagem_perfil: DataTypes.STRING,
    cargo: DataTypes.STRING,
    celular: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'usuarios',
  });
  return usuarios;
};