'use strict';
module.exports = function(sequelize, DataTypes) {
  var List = sequelize.define('List', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
          List.hasMany(models.Todo);
          List.belongsTo(models.Board);
      }
    }
  });
  return List;
};
