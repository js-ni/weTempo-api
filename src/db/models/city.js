"use strict";
module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define(
    "Cities",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER
      },
      uuid: {
        allowNull: false,
        autoIncrement: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      flagUrl: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true
      },
      cardinal: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      winSpeed: {
        type: Sequelize.STRING,
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
