const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    // define columns
    rock_music: {
      type: DataTypes.STRING,
    },
    pop_music: {
      type: DataTypes.STRING,
    },
    blue: {
      type: DataTypes.STRING,
    },
    red: {
      type: DataTypes.STRING,
    },
    green: {
      type: DataTypes.STRING,
    },
    white: {
      type: DataTypes.STRING,
    },
    gold: {
      type: DataTypes.STRING,
    },
    pop_culture: {
      type: DataTypes.STRING,
    }
  },
    
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
