'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.belongsToMany(models.Companies, {
        through: 'Favorites',
        foreignKey: 'userId',
        as: 'favorites',
      });
    }
  }
  User.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    city: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};