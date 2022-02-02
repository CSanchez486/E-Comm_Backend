// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    P_T_Shirt :{
      type: DataTypes.STRING,
    },
    Sneakers: {
      type: DataTypes.STRING,
    },
    Baseball_Hat: {
      type: DataTypes.STRING,
    },
    Vinyl_Record: {
      type: DataTypes.STRING,
    },
    Cargo_Shorts: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
