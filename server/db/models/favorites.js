'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favorites extends Model {
    static associate(models) {
      // define association here
    }
  }
  Favorites.init({
    userId: DataTypes.INTEGER,
    companyId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Favorites',
  });
  return Favorites;
};