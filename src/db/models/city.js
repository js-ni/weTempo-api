"use strict";
module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define(
    "Cities",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      uuid: {
        allowNull: false,
        autoIncrement: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      flagUrl: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
      },
      cardinal: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      winSpeed: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {}
  );
  City.associate = function(models) {
    City.hasMany(models.Observations, { foreignKey: "cityId" });
  };
  return City;
};
