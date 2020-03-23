"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "Users",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      }
    },
    {}
  );
  User.associate = function(models) {
    User.hasMany(models.Observations, { foreignKey: "userId" });
  };
  return User;
};
