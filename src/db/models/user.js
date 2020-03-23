"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "Users",
    {
      name: DataTypes.STRING
    },
    {}
  );
  User.associate = function(models) {
    User.hasMany(models.Observations, { foreignKey: "" });
  };
  return User;
};
