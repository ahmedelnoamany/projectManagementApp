'use strict';
module.exports = function(sequelize, DataTypes) {
  var Board = sequelize.define('Board', {
    title: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Board.hasMany(models.List);
        // associations can be defined here
      }
    }
  });
  return Board;
};
