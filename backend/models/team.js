'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Team extends Model {
    static associate(models) {
      // define association here
    }
  }

  Team.init({
    name: DataTypes.STRING,
    klasse: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Team',
  });

  return Team;
};