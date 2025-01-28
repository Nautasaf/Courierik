'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Companies extends Model {
    static associate(models) {
      this.belongsToMany(models.User, {
        through: 'Favorites',
        foreignKey: 'companyId',
        as: 'users',
      });
    }
  }
  Companies.init({
    name: DataTypes.STRING,
    path: DataTypes.STRING,
    description: DataTypes.TEXT,
    logo_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Companies',
  });
  return Companies;
};