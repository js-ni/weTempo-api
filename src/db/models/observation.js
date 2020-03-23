"use strict";
module.exports = (sequelize, DataTypes) => {
  const Observation = sequelize.define(
    "Observations",
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
      text: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      },
      userId: {
        type: DataTypes.INTEGER,
        references: { model: "Users", key: "id" }
      },
      cityId: {
        type: DataTypes.INTEGER,
        references: { model: "Cities", key: "id" }
      }
    },
    {}
  );
  Observation.associate = function(models) {
    Observation.belongsTo(models.Users, { foreignKey: "userId" });
    Observation.belongsTo(models.Cities, { foreignKey: "cityId" });
  };
  return Observation;
};
