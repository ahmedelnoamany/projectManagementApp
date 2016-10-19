'use strict';
module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define('Todo', {
    title: DataTypes.STRING,
    complete: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
    ListId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Todo.belongsTo(models.List);

        // associations can be defined here
      }
    }
  });
  return Todo;
};
