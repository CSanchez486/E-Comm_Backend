// import models
const { foreign_key } = require('inflection');
const Category = require('./Category');
const Product = require('./Product');
const ProductTag = require('./ProductTag');
const Tag = require('./Tag');


// Products belongsTo Category, 
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
});

// Products belongToMany Tags (through ProductTag)
// reference: 'Alias and custom keys" https://sequelize.org/master/manual/advanced-many-to-many.html
Product.belongsToMany(Tags, {
  through: 'ProductTag',
  foreignKey: 'product_id',
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: 'ProductTag',
  foreignKey: 'tag_id',

})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
